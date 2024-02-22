// // // pages/api/report.ts
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { createClient } from '@sanity/client';

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   const sanityClient = createClient({
// //     projectId: 'jnqvatdi',
// //     dataset: 'production',
// //     apiVersion: '2024-02-11',
// //     useCdn: false
// //   });

// //   try {
// //     const query = `*[_type == "report"] {
// //       heading,
// //       content[] {
// //         ...,
// //         subheading {
// //           value
// //         },
// //         textContent {
// //           value
// //         },
// //         imageWithCaption {
// //           image,
// //           caption
// //         }
// //       }
// //     }`;

// //     const data = await sanityClient.fetch(query);
// //     res.status(200).json(data);
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // }

// // pages/api/events.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { createClient } from '@sanity/client';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const client = createClient({
//         projectId: 'jnqvatdi',
//         dataset: 'production',
//         apiVersion: '2024-02-11',
//         useCdn: false
//     });

//     const query = `*[_type == "report"] {
//         content[] {
//         ...,
//         subheading {
//             value
//         },
//         textContent {
//             value
//         },
//         imageWithCaption {
//             image,
//             caption
//         }
//         }
//     }`;

//     const events = await client.fetch(query);

//     res.status(200).json(events);
//   } catch (error) {
//     console.error('Error fetching events from Sanity:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }




// pages/api/report.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = createClient({
      projectId: 'jnqvatdi',
      dataset: 'production',
      apiVersion: '2024-02-11',
      useCdn: false
    });

    const query = `*[_type == "report"] {
      heading,
      content[] {
        ...,
        // Only include the fields that are relevant to your components
        _type,
        value,
        image,
        caption
      }
    }`;

    const reports = await client.fetch(query);

    // Assuming there's only one report, you can take the first element
    const report = reports[0];

    if (!report) {
      res.status(404).json({ error: 'Report not found' });
      return;
    }

    res.status(200).json(report);
  } catch (error) {
    console.error('Error fetching report from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

