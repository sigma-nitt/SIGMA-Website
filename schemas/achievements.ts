export default {
    name: 'achievements',
    title: 'ACHIEVEMENTS',
    type: 'document',
    fields: [
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
      {
        name: 'imageContest',
        title: 'An Image of contest/hackathon',
        type: 'image',
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Publishing Date'
      }
    ],
  };