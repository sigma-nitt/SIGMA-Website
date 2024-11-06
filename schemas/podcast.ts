export default {
    name: 'youtubeVideo',
    title: 'Podcasts - YouTube Video',
    type: 'document',
    fields: [
      {
        name: 'videoId',
        title: 'Video ID (ID between v= and &t)',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
};
