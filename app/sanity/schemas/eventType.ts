import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Etkinlik',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Etkinlik Adı',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Tarih',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'time',
      type: 'string',
      title: 'Saat',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ticketLink',
      type: 'url',
      title: 'Bilet Linki',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'place',
      type: 'string',
      title: 'Yer',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Açıklama',
    }),
  ],
})
