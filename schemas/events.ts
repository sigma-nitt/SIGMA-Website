export default {
  name: 'event',
  title: 'EVENTS',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'priority',
              title: 'Priority',
              type: 'string',
              description: 'Priority of the image for loading. Options: "lazy" or "eager". Default is "lazy".',
              options: {
                list: [
                  { title: 'Lazy', value: 'lazy' },
                  { title: 'Eager', value: 'eager' },
                ],
                layout: 'radio',
              },
            },
          ],
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
    },
  ],
};
