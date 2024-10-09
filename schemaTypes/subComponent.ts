export const subComponents={
    name:'subComponents',
    title:'Sub Components',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'image',
            title:'Image',
            type:'image'
        },
        {
            name:'nested',
            title:'Nested',
            type:'array',
            of:[{type:'subComponents'}]
        }
    ]
}