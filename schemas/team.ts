interface TeamMemberSchema {
    name: string;
    type: string;
    fields: {
      name: string;
      title: string;
      type: string;
    }[];
  }
  
  const teamMemberSchema: TeamMemberSchema = {
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
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  };
  
  export default teamMemberSchema;
  