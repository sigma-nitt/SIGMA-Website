export default {
    name: 'clients',
    title: 'CLIENTS',
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
        name: 'clientimage',
        title: 'An Image of client',
        type: 'image',
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Publishing Date'
      }
    ],
  };