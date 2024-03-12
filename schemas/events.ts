// schemas/event.js

// export default {
//   name: 'event',
//   title: 'Event',
//   type: 'document',
//   // type: 'image',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [{ type: 'image' }],
//       options: {
//         layout: 'grid',
//       },
//       validation: Rule => Rule.max(4),
//     },
//   ],
// };
export default {
  name: 'event',
  title: 'Event',
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
  ],
};
