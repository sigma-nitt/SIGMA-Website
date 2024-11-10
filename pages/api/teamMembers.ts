// pages/api/teamMembers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { selectedCategory } = req.query;

  const client = createClient({
    // projectId: 'jnqvatdi',
    // dataset: 'production',
    // apiVersion: '2024-02-11',
    projectId: 'vdzzonmk',
    dataset: 'production',
    apiVersion: '2024-11-06',
    useCdn: false
  });

  try {
    const query = selectedCategory
      ? `*[_type == "teamMember" && category == $selectedCategory] | order(_createdAt asc) | {
          name,
          position,
          category,
          aboutyou,
          image,
          instagramUrl,
          linkedinUrl
        }`
      : `*[_type == "teamMember"] | order(_createdAt asc) | {
          name,
          position,
          category,
          aboutyou,
          image,
          instagramUrl,
          linkedinUrl
        }`;

    const params = selectedCategory ? { selectedCategory: Array.isArray(selectedCategory) ? selectedCategory[0] : selectedCategory } : {};
    const data = await client.fetch(query, params);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



