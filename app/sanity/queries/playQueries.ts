export const playsQuery = groq`*[_type == "play"] | order(premiereDate desc) {
  _id,
  title,
  subTitle,
  "slug": slug.current,
  playImage,
  playShortDescription,
  premiereDate,
  ticketLink,
  playDuration,
  
}`;

export const playBySlugQuery = groq`*[_type == "play" && slug.current == $slug][0] {
  _id,
  title,
  subTitle,
  "slug": slug.current,
  playImage,
  playPoster,
  playDescription,
  premiereDate,
  playDuration,
  ticketLink,
  seo {
    title,
    description,
    image,
    noIndex
  },
  "gallery": playPhotos->images[],
  "events": dates[]-> {
    _id,
    title,
    date,
    place,
    time,
    ticketLink,
    description
  },
  "casts": casts[] -> {
    fullName,
    actorImage
  },
  backstage[] {
    order,
    "member": member-> {
      fullName,
      image
    },
    "roles": roles[]->roleName
  }
}`;
