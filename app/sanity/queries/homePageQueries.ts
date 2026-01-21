export const homePageQuery = groq`*[_type == "homePage"][0] {
  _id,
  slider[] {
    asset-> {
      _id,
      url
    }
  },
  seo {
    title,
    description,
    image,
    noIndex
  },
  selectedPlay[]-> {
    _id,
    title,
    "slug": slug.current,
    slogan,
    "image": mainImage.asset._ref
  }
}`;
