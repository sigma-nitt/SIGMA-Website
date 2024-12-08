export default {
  name: 'pdfReportDA',
  title: 'ANALYTICS PROJECTS',
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
      name: 'pdfReport',
      title: 'PDF Report',
      type: 'file',
    },
    {
      name: 'coverPage',
      title: 'Cover Page',
      type: 'image',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publishing Date'
    }
  ],
};
  