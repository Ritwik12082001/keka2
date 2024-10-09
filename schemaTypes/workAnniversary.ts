export const workAnniversary = {
    name: 'workAnniversary',
    title: 'Work Anniversary',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'array',
        of: [{ type: 'employee' }]
      }
    ]
  }