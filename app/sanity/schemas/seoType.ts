import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'Seo Alanları',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Eğer eklenirse sayfa başlığında gözükecek',
      title: 'SEO Başlık',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'SEO Açıklama',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
    }),
  ],
})
