import {defineField, defineType} from 'sanity'

export const playType = defineType({
  name: 'play',
  title: 'Oyun',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Oyun Adı',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      description: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'subTitle',
      type: 'text',
      title: 'Oyun Alt Başlık',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'playImage',
      type: 'image',
      title: 'Oyun Resmi',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'playPoster',
      type: 'image',
      title: 'Oyun Afişi',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'playPhotos',
      title: 'Oyun Fotoğrafları',
      type: 'reference',
      to: [{type: 'gallery'}],
    }),
    defineField({
      name: 'playDescription',
      type: 'array',
      title: 'Oyun Tanıtımı',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'playShortDescription',
      type: 'text',
      title: 'Oyun Kısa Tanıtımı',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'premiereDate',
      title: 'Prömiyer Tarihi',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'dates',
      title: 'Oyun Tarihleri',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
    }),
    defineField({
      name: 'playDuration',
      title: 'Oyun Süresi',
      type: 'string',
    }),
    defineField({
      name: 'ticketLink',
      title: 'Bilet Linki',
      type: 'url',
    }),
    defineField({
      name: 'casts',
      title: 'Oyuncular',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cast'}]}],
    }),
    defineField({
      name: 'backstage',
      title: 'Kadro',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'member',
              title: 'Kişi',
              type: 'reference',
              to: [{type: 'backstage'}],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'roles',
              title: 'Roller',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'castRole'}],
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'order',
              title: 'Gösterim Sırası',
              type: 'number',

              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              memberName: 'member.fullName',
              role0: 'roles.0.roleName',
              role1: 'roles.1.roleName',
              role2: 'roles.2.roleName',
            },
            prepare({memberName, role0, role1, role2}) {
              const roles = [role0, role1, role2].filter(Boolean)
              return {
                title: memberName || 'İsimsiz',
                subtitle: roles.length > 0 ? roles.join(', ') : 'Rol atanmamış',
              }
            },
          },
        },
      ],
    }),
  ],
})
