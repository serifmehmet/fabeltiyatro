import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  type: 'document',
  title: 'Oyun Galerisi',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Galeri Adı',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Fotoğraflar',
      of: [
        {
          type: 'image',
        },
      ],
    }),
  ],
})
