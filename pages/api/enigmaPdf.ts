// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@sanity/client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const client = createClient({
//         // projectId: 'jnqvatdi',
//         // dataset: 'production',
//         // apiVersion: '2024-02-11',
//         projectId: 'vdzzonmk',
//         dataset: 'production',
//         apiVersion: '2024-11-06',
//         useCdn: false
//     });

//     const query = `*[_type == "pdfDocument"] | order(title desc) | {
//       title,
//       description,
//       "url": pdfFile.asset->url,
//       coverPage,
//     }`;

//     const pdfDocuments = await client.fetch(query);

//     res.status(200).json(pdfDocuments);
//   } catch (error) {
//     console.error('Error fetching PDF documents from Sanity:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }






import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = createClient({
        // projectId: 'jnqvatdi',
        // dataset: 'production',
        // apiVersion: '2024-02-11',
        projectId: 'vdzzonmk',
        dataset: 'production',
        apiVersion: '2024-11-06',
        useCdn: false
    });

    const query = `*[_type == "pdfDocument"] | order(title desc) | {
      title,
      description,
      link,
      coverPage,
    }`;

    const pdfDocuments = await client.fetch(query);

    res.status(200).json(pdfDocuments);
  } catch (error) {
    console.error('Error fetching PDF documents from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}