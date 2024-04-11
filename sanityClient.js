import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'jnqvatdi',
  dataset: 'production',
  useCdn: true,
});

export default client;
