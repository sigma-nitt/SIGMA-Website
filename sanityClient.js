import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'vdzzonmk',
  dataset: 'production',
  useCdn: true,
});

export default client;
