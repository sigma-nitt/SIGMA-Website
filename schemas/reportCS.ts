export default {
    name: 'reportCS',
    type: 'document',
    title: 'Report - Case Studies',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Project Title',
      },
      {
        name: 'introductoryText',
        type: 'string',
        title: 'Introductory Text',
      },
      {
        name: 'introductoryImage',
        type: 'image',
        title: 'Introductory Image',
      },
      
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'object',
            name: 'subheading',
            title: 'Subheading',
            fields: [
              { name: 'value', type: 'string', title: 'Subheading Content' },
              { name: 'color', type: 'string', title: 'Text Color' },
              { name: 'fontSize', type: 'number', title: 'Font Size' },
            ],
          },
          {
            type: 'object',
            name: 'richText',
            title: 'Rich Text Content',
            fields: [
              {
                name: 'value',
                type: 'array',
                title: 'Text Content',
                of: [{ type: 'block' }],
              },
              { name: 'color', type: 'string', title: 'Text Color' },
              { name: 'fontSize', type: 'number', title: 'Font Size' },
            ],
          },
          {
            type: 'object',
            name: 'imageWithCaption',
            title: 'Image with Caption',
            fields: [
              { name: 'image', type: 'image', title: 'Image' },
              { name: 'caption', type: 'string', title: 'Caption' },
              { name: 'borderColor', type: 'string', title: 'Border Color' },
              { name: 'borderWidth', type: 'number', title: 'Border Width' },
            ],
          },
          {
            type: 'object',
            name: 'bulletList',
            title: 'Bullet List',
            fields: [
              {
                name: 'items',
                type: 'array',
                title: 'List Items',
                of: [{ type: 'block' }],
              },
              { name: 'color', type: 'string', title: 'Text Color' },
              { name: 'fontSize', type: 'number', title: 'Font Size' },
            ],
          },
        ],
      },
    ],
  };