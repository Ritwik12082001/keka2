export const birthday = {
  name: 'birthday',
  title: 'Birthday',
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