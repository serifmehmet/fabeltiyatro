interface SeoData {
  title?: string
  description?: string
  image?: any
  noIndex?: boolean
}

interface SeoMetaOptions {
  seo?: SeoData
  fallbackTitle?: string
  fallbackDescription?: string
}

/**
 * Composable for managing SEO metadata across pages.
 * Supports title, description, and is scalable for future og: fields.
 *
 * @param options - SEO data from Sanity and fallback values
 * @returns void - Sets up meta tags using useHead
 */
export function useSeo(options: SeoMetaOptions) {
  const { seo, fallbackTitle, fallbackDescription } = options

  // Use seo title or fallback
  // Note: nuxt.config has titleTemplate: "%s | Fabel Tiyatro"
  // so we only need to provide the page title without the suffix
  const pageTitle = seo?.title || fallbackTitle || 'Fabel Tiyatro'

  // Use seo description or fallback
  const description = seo?.description || fallbackDescription || ''

  // Base meta configuration
  const meta: Array<{ name?: string; property?: string; content: string }> = []

  // Add description
  if (description) {
    meta.push({
      name: 'description',
      content: description
    })
  }

  // Add noIndex if specified
  if (seo?.noIndex) {
    meta.push({
      name: 'robots',
      content: 'noindex, nofollow'
    })
  }

  // Placeholder for future Open Graph fields
  // When seo.image or other og fields are ready, add them here:
  // if (seo?.image) {
  //   meta.push({
  //     property: 'og:image',
  //     content: getImageUrl(seo.image)
  //   })
  // }
  // meta.push({ property: 'og:title', content: pageTitle })
  // meta.push({ property: 'og:description', content: description })
  // meta.push({ property: 'og:type', content: 'website' })

  // Set meta tags
  useHead({
    title: pageTitle,
    meta
  })
}
