export const announcement = {
    name: 'announcement',
    type: 'document',
    fields: [
        {
            name: 'announcement',
            title: 'Announcement',
            type: 'array',
            of: [{ type: 'string' }],
        }
    ]
}