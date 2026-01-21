export const aboutQuery = groq`*[_type == "about"][0] {
   _id,
   seo {
    title,
    description,
    image,
    noIndex
  },
  aboutImage,
  description,
}`;
