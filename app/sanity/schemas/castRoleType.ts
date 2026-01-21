import {defineField, defineType} from 'sanity'

export const castRoleType = defineType({
  name: 'castRole',
  title: 'Rol',
  type: 'document',
  fields: [
    defineField({
      name: 'roleName',
      title: 'Rol Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
