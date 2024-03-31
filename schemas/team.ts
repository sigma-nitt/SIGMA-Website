// interface TeamMemberSchema {
//     name: string;
//     type: string;
//     fields: {
//       name: string;
//       title: string;
//       type: string;
//     }[];
//   }
  
//   const teamMemberSchema: TeamMemberSchema = {
//     name: 'teamMember',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//       },
//       {
//         name: 'position',
//         title: 'Position',
//         type: 'string',
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'string',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//       }
//     ],
//   };
  
//   export default teamMemberSchema;
  
const teamMemberSchema = {
  name: 'teamMember',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'President', value: 'President' },
          { title: 'Vice-President', value: 'Vice-President' },
          { title: 'Head - Data Analytics', value: 'Head - Data Analytics' },
          { title: 'Head - Case Studies', value: 'Head - Case Studies' },
          { title: 'Senior Manager', value: 'Senior Manager' },
          { title: 'Manager', value: 'Manager' },
          { title: 'Deputy Manager', value: 'Deputy Manager' },
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'core', value: 'core' },
          { title: 'senior manager', value: 'senior manager' },
          { title: 'manager', value: 'manager' },
          { title: 'deputy manager', value: 'deputy manager' },
        ],
      },
    },
    {
      name: 'aboutyou',
      title: 'Something about you (max 30 words)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};

export default teamMemberSchema;
