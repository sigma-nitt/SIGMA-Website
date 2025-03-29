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



export const config = {
  runtime: 'nodejs',
};

import { NextApiRequest, NextApiResponse } from 'next';
import { degrees, rgb, PDFDocument, StandardFonts } from 'pdf-lib';
import fetch from 'node-fetch';
import { createClient } from '@sanity/client';
import stream from 'stream';

const sanityClient = createClient({
  projectId: 'vdzzonmk',
  dataset: 'production',
  token: 'skPHlCv1D2rzDWhoyBHMRRC7CBOY9x3RpE2gZCoGK1Jk4EdUiEl3tY0bAlMEMwO2rvKz4EG2NTBWg780QxivTLtWqs9byGyoNtJkHXTb6nJodziutEm2yNQeR0hehInhNz7KbajlZa02yKeFJfnJTR6PpG5fCGLraHGSUxX52452xLAa7ent',
  useCdn: false,
  apiVersion: '2024-11-06',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { documentId, fileUrl } = req.body;
    if (!documentId || !fileUrl) return res.status(400).json({ error: 'Missing data' });

    // 1. Fetch the original PDF
    const response = await fetch(fileUrl);
    const pdfBytes = await response.arrayBuffer();

    // 2. Load the PDF and add a watermark
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    pages.forEach((page) => {
      page.drawText('Confidential', {
        x: 50,
        y: 50,
        size: 50,
        rotate: degrees(-45),
        font,
        color: rgb(1, 0, 0),
        opacity: 0.3,
      });
    });

    // 3. Save the watermarked PDF as Buffer
    const watermarkedPdfBytes = await pdfDoc.save();
    const buffer = Buffer.from(watermarkedPdfBytes);

    // 4. Convert Buffer to Readable Stream
    const readableStream = new stream.PassThrough();
    readableStream.end(buffer);

    // 5. Upload directly to Sanity
    const asset = await sanityClient.assets.upload('file', readableStream, {
      filename: `${documentId}-watermarked.pdf`,
    });

    // 6. Update Sanity document with new PDF URL
    await sanityClient.patch(documentId).set({ file: { asset: { _ref: asset._id } } }).commit();

    res.status(200).json({ success: true, newPdfUrl: asset.url });
  } catch (error) {
    console.error('Error watermarking PDF:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
