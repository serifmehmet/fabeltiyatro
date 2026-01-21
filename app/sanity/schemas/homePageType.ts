import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  type: "document",
  title: "Anasayfa",
  fields: [
    defineField({
      name: "seo",
      type: "seo",
    }),
    defineField({
      name: "slider",
      type: "array",
      title: "Slider",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "selectedPlay",
      type: "array",
      of: [{ type: "reference", to: [{ type: "play" }] }],
    }),
  ],
});
