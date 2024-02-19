// schemas/pdfDocument.js
export default {
    name: 'pdfDocument',
    title: 'PDF Document',
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
  