//multiple report
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = createClient({
      projectId: 'vdzzonmk',
      dataset: 'production',
      // apiVersion: '2024-11-06',
      apiVersion: '2021-03-25',
      useCdn: false
    });

    // const query = `*[_type == "pdfReportDA"] | {
    //   title,
    //   description,
    //   "url": pdfReport.asset->url,
    //   coverPage,
    // }`;

    const query = `*[_type == "pdfReportDA"] | order(publishedAt desc) {
      title,
      description,
      "url": pdfReport.asset->url,
      coverPage,
      publishedAt
    }`;
    
    const reports = await client.fetch(query);

    if (!reports) {
      res.status(404).json({ error: 'Report not found' });
      return;
    }

    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching report from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}