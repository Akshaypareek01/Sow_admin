import type { CollectionConfig } from 'payload/types'


export const Customers: CollectionConfig= {
 slug: 'customers',
 auth:true,
 fields:[
    {
        name:'firstName',
        type:'text',
        required:true,
    },
    {
        name: 'lastName',
        type:'text',
        required:true,
    },
 ]
}