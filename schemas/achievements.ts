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
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        options: {
          layout: 'grid',
        },
        validation: Rule => Rule.max(10),
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Publishing Date'
      }
    ],
  };