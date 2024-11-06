export default {
    name: 'Resources',
    title: 'RESOURCES',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'resourceType',
        title: 'Type of resource',
        type: 'string',
        options: {
            list: [
              { title: 'Video', value: 'Video' },
              { title: 'Blog/Article/Discussion', value: 'Blog/Article/Discussion' },
              { title: 'Book', value: 'Book' },
            ],
          },
      },
      {
        name: 'link',
        title: 'Link to the resource',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Domain',
        type: 'string',
        options: {
          list: [
            { title: 'Data Analytics', value: 'Data Analytics' },
            { title: 'Case Studies', value: 'Case Studies' },
          ],
        },
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
      },
    ],
};
