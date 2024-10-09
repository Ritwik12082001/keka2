export const newJoiners = {
    name: 'newJoiners',
    title: 'newJoiners',
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