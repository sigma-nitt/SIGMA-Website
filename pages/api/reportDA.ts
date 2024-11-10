//multiple report
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

    const query = `*[_type == "pdfReportDA"] | {
      title,
      description,
      "url": pdfReport.asset->url,
      coverPage,
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