import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'jnqvatdi',
  dataset: 'production',
  useCdn: true, // Enable the Content Delivery Network (CDN) for faster response times (optional)
});

export default client;
