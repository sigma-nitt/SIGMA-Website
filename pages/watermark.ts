// export const config = {
//   runtime: 'nodejs',
// };

// import { NextApiRequest, NextApiResponse } from 'next';
// import { degrees, rgb, PDFDocument, StandardFonts } from 'pdf-lib';
// import fetch from 'node-fetch';
// import { createClient } from '@sanity/client';
// import fs from 'fs';
// import path from 'path';

// const sanityClient = createClient({
//   projectId: 'vdzzonmk',
//   dataset: 'production',
//   token: 'skPHlCv1D2rzDWhoyBHMRRC7CBOY9x3RpE2gZCoGK1Jk4EdUiEl3tY0bAlMEMwO2rvKz4EG2NTBWg780QxivTLtWqs9byGyoNtJkHXTb6nJodziutEm2yNQeR0hehInhNz7KbajlZa02yKeFJfnJTR6PpG5fCGLraHGSUxX52452xLAa7ent',
//   useCdn: false,
//   apiVersion: '2024-11-06',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

//   try {
//     const { documentId, fileUrl } = req.body;
//     if (!documentId || !fileUrl) return res.status(400).json({ error: 'Missing data' });

//     // 1. Fetch the original PDF
//     const response = await fetch(fileUrl);
//     const pdfBytes = await response.arrayBuffer();

//     // 2. Load the PDF and add a watermark
//     const pdfDoc = await PDFDocument.load(pdfBytes);
//     const pages = pdfDoc.getPages();
//     const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold); // Fix: Use StandardFonts

//     pages.forEach((page) => {
//       page.drawText('Confidential', {
//         x: 50,
//         y: 50,
//         size: 50,
//         rotate: degrees(-45),
//         font, // Fix: Use the embedded font
//         color: rgb(1, 0, 0),
//         opacity: 0.3,
//       });
//     });

//     // 3. Save the watermarked PDF
//     const watermarkedPdfBytes = await pdfDoc.save();
//     const filePath = path.join('/tmp', `${documentId}-watermarked.pdf`);
    
//     fs.writeFileSync(filePath, watermarkedPdfBytes); // Fix: Pass Uint8Array directly

//     // 4. Upload to Sanity
//     const asset = await sanityClient.assets.upload('file', fs.createReadStream(filePath), {
//       filename: `${documentId}-watermarked.pdf`,
//     });

//     // 5. Update Sanity document with new PDF URL
//     await sanityClient.patch(documentId).set({ file: { asset: { _ref: asset._id } } }).commit();

//     res.status(200).json({ success: true, newPdfUrl: asset.url });
//   } catch (error) {
//     console.error('Error watermarking PDF:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }








import { PDFDocument, rgb, degrees } from "pdf-lib";
import fetch from "node-fetch";
import FormData from "form-data";

const SANITY_PROJECT_ID = "vdzzonmk";  // Replace with your Sanity project ID
const SANITY_DATASET = "production";  // Replace with your dataset
const SANITY_API_TOKEN = "skPHlCv1D2rzDWhoyBHMRRC7CBOY9x3RpE2gZCoGK1Jk4EdUiEl3tY0bAlMEMwO2rvKz4EG2NTBWg780QxivTLtWqs9byGyoNtJkHXTb6nJodziutEm2yNQeR0hehInhNz7KbajlZa02yKeFJfnJTR6PpG5fCGLraHGSUxX52452xLAa7ent"; // Replace with your API token

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { body } = req;
    const pdfUrl = body?.document?.originalPdf?.asset?._ref;

    if (!pdfUrl) {
      return res.status(400).json({ error: "No PDF URL found in the webhook payload" });
    }

    // Convert Sanity asset ref to a downloadable URL
    const sanityAssetUrl = `https://cdn.sanity.io/files/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${pdfUrl.replace("file-", "").replace("-", ".")}`;

    const pdfBytes = await (await fetch(sanityAssetUrl)).arrayBuffer();

    // Load PDF and add watermark
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    pages.forEach((page) => {
      const { width, height } = page.getSize();
      page.drawText("CONFIDENTIAL", {
        x: width / 4,
        y: height / 2,
        size: 40,
        color: rgb(1, 0, 0),
        rotate: degrees(45),
        opacity: 0.3,
      });
    });

    // Save watermarked PDF
    const watermarkedPdfBytes = await pdfDoc.save();
    const fileBuffer = Buffer.from(watermarkedPdfBytes);

    // Upload watermarked PDF to Sanity
    const form = new FormData();
    form.append("file", fileBuffer, { filename: "watermarked.pdf", contentType: "application/pdf" });

    const sanityResponse = await fetch(
      `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/files/${SANITY_DATASET}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SANITY_API_TOKEN}`,
        },
        body: form,
      }
    );

    const sanityResult = await sanityResponse.json();
    if (!sanityResponse.ok) {
      throw new Error(`Sanity Upload Failed: ${sanityResult.error?.message || "Unknown Error"}`);
    }

    // Update the Sanity document with the watermarked PDF URL
    const mutation = [
      {
        patch: {
          id: body.document._id,
          set: {
            watermarkedPdf: {
              _type: "file",
              asset: {
                _type: "reference",
                _ref: sanityResult.document._id,
              },
            },
          },
        },
      },
    ];

    await fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${SANITY_DATASET}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({ mutations: mutation }),
    });

    return res.status(200).json({ success: true, url: sanityResult.url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to watermark and upload PDF" });
  }
}
