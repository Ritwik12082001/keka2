export const poll = {
    name: 'poll',
    title: 'poll',
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