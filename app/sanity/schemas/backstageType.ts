import {defineType, defineField} from 'sanity'

export const backstageType = defineType({
  name: 'backstage',
  type: 'document',
  title: 'Oyun Ekibi',
  fields: [
    defineField({
      name: 'fullName',
      type: 'string',
      title: 'Adı Soyadı',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Resim',
      options: {
        hotspot: true,
      },
    }),
  ],
})
