import {defineField, defineType} from 'sanity'

export const castType = defineType({
  name: 'cast',
  title: 'Oyuncu',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      type: 'string',
      title: 'Adı Soyadı',
    }),
    defineField({
      name: 'actorImage',
      type: 'image',
      title: 'Aktor Resmi',
      options: {
        hotspot: true,
      },
    }),
  ],
})
