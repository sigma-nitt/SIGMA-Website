// pages/api/youtubeVideos.ts
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

    const query = `*[_type == "youtubeVideo"] {
      videoId,
      title,
      description
    }`;

    const videos = await client.fetch(query);

    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching YouTube videos from Sanity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
