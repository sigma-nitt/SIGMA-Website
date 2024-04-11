// pages/api/teamMembers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { selectedCategory } = req.query;

  // Check if selectedCategory is defined and convert it to string if it exists
  const categoryString = Array.isArray(selectedCategory) ? selectedCategory[0] : selectedCategory;
  if (!categoryString) {
    res.status(400).json({ error: 'Missing selectedCategory parameter' });
    return;
  }

  const client = createClient({
    projectId: 'jnqvatdi',
    dataset: 'production',
    apiVersion: '2024-02-11',
    useCdn: false
  });

  try {
    const query = `*[_type == "teamMember" && category == $selectedCategory] | order(_createdAt asc) | {
      name,
      position,
      category,
      aboutyou,
      image,
    }`;
    // Extract the selected category from the query parameters
    const params = { selectedCategory: categoryString };
    const data = await client.fetch(query, params);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



