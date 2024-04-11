export default {
  name: 'pdfDocument',
  title: 'ENIGMA',
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
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
    },
  ],
};
  