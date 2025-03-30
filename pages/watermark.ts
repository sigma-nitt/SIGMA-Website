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





















// export const config = {
//   runtime: 'nodejs',
// };

// import { NextApiRequest, NextApiResponse } from 'next';
// import { degrees, rgb, PDFDocument, StandardFonts } from 'pdf-lib';
// import fetch from 'node-fetch';
// import { createClient } from '@sanity/client';
// import stream from 'stream';

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
//     const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

//     pages.forEach((page) => {
//       page.drawText('Confidential', {
//         x: 50,
//         y: 50,
//         size: 50,
//         rotate: degrees(-45),
//         font,
//         color: rgb(1, 0, 0),
//         opacity: 0.3,
//       });
//     });

//     // 3. Save the watermarked PDF as Buffer
//     const watermarkedPdfBytes = await pdfDoc.save();
//     const buffer = Buffer.from(watermarkedPdfBytes);

//     // 4. Convert Buffer to Readable Stream
//     const readableStream = new stream.PassThrough();
//     readableStream.end(buffer);

//     // 5. Upload directly to Sanity
//     const asset = await sanityClient.assets.upload('file', readableStream, {
//       filename: `${documentId}-watermarked.pdf`,
//     });

//     // 6. Update Sanity document with new PDF URL
//     await sanityClient.patch(documentId).set({ file: { asset: { _ref: asset._id } } }).commit();

//     res.status(200).json({ success: true, newPdfUrl: asset.url });
//   } catch (error) {
//     console.error('Error watermarking PDF:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }












// import { PDFDocument, rgb, degrees } from 'pdf-lib';
// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   try {
//     const { documentId, fileUrl } = req.body; // Extract from webhook

//     // 1. Download the PDF
//     const response = await fetch(fileUrl);
//     const arrayBuffer = await response.arrayBuffer();
//     const pdfDoc = await PDFDocument.load(arrayBuffer);

//     // 2. Add a Watermark
//     const pages = pdfDoc.getPages();
//     for (let page of pages) {
//       const { width, height } = page.getSize();
//       page.drawText('CONFIDENTIAL', {
//         x: width / 4,
//         y: height / 2,
//         size: 50,
//         color: rgb(1, 0, 0),
//         opacity: 0.3,
//         rotate: degrees(45),
//       });
//     }

//     // 3. Save PDF in Memory
//     const modifiedPdfBytes = await pdfDoc.save();
//     const modifiedPdfBase64 = Buffer.from(modifiedPdfBytes).toString('base64');

//     // 4. Upload back to Sanity
//     const sanityResponse = await fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.SANITY_DATASET}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
//       },
//       body: JSON.stringify({
//         mutations: [
//           {
//             patch: {
//               id: documentId,
//               set: {
//                 "pdfFile.asset._ref": `data:application/pdf;base64,${modifiedPdfBase64}`, // Update PDF in Sanity
//               },
//             },
//           },
//         ],
//       }),
//     });

//     return res.status(200).json({ message: 'Watermark added & PDF updated in Sanity' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }








// import { PDFDocument, rgb, degrees } from 'pdf-lib';
// import fetch from 'node-fetch';
// import FormData from 'form-data';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   try {
//     const { documentId, fileUrl } = req.body; // Extract document ID & File URL

//     // 1. Download the original PDF
//     const response = await fetch(fileUrl);
//     const arrayBuffer = await response.arrayBuffer();
//     const pdfDoc = await PDFDocument.load(arrayBuffer);

//     // 2. Add a Watermark
//     const pages = pdfDoc.getPages();
//     for (let page of pages) {
//       const { width, height } = page.getSize();
//       page.drawText('CONFIDENTIAL', {
//         x: width / 4,
//         y: height / 2,
//         size: 50,
//         color: rgb(1, 0, 0),
//         opacity: 0.3,
//         rotate: degrees(45),
//       });
//     }

//     // 3. Save Modified PDF to Buffer
//     const modifiedPdfBytes = await pdfDoc.save();

//     // 4. Upload the Watermarked PDF to Sanity
//     const formData = new FormData();
//     formData.append("file", Buffer.from(modifiedPdfBytes), { filename: "watermarked.pdf", contentType: "application/pdf" });

//     const uploadResponse = await fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/assets/files/${process.env.SANITY_DATASET}`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
//       },
//       body: formData,
//     });

//     const uploadData = await uploadResponse.json();
//     const newAssetId = uploadData.document._id; // Get asset ID

//     // 5. Update the Sanity Document with the new asset reference
//     await fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.SANITY_DATASET}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
//       },
//       body: JSON.stringify({
//         mutations: [
//           {
//             patch: {
//               id: documentId,
//               set: {
//                 "pdfFile.asset._ref": newAssetId, // Reference new uploaded PDF
//               },
//             },
//           },
//         ],
//       }),
//     });

//     return res.status(200).json({ message: 'Watermark added & PDF updated in Sanity' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }








import { PDFDocument, rgb, degrees } from 'pdf-lib';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { documentId, fileUrl } = req.body; // Extract from webhook

    // 1. Download the PDF
    const response = await fetch(fileUrl);
    const arrayBuffer = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // 2. Add a Watermark
    const pages = pdfDoc.getPages();
    for (let page of pages) {
      const { width, height } = page.getSize();
      page.drawText('CONFIDENTIAL', {
        x: width / 4,
        y: height / 2,
        size: 50,
        color: rgb(1, 0, 0),
        opacity: 0.3,
        rotate: degrees(45), // ✅ Correct rotation function
      });
    }

    // 3. Save PDF in Memory
    const modifiedPdfBytes = await pdfDoc.save();
    const modifiedPdfBase64 = Buffer.from(modifiedPdfBytes).toString('base64');

    // 4. Upload back to Sanity with API token
    await fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.SANITY_DATASET}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SANITY_API_TOKEN}`, // ✅ Added token
      },
      body: JSON.stringify({
        mutations: [
          {
            patch: {
              id: documentId,
              set: {
                "pdfFile.asset._ref": `data:application/pdf;base64,${modifiedPdfBase64}`, // ✅ Update PDF in Sanity
              },
            },
          },
        ],
      }),
    });

    return res.status(200).json({ message: 'Watermark added & PDF updated in Sanity' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
