<script lang="ts" setup>
import { aboutQuery } from "~/sanity/queries/aboutQuery";
import type { PortableTextBlock } from "@portabletext/types";
import mailingListBanner from "~/assets/images/mailing-list-banner.jpg";

interface About {
    _id: string;
    description: PortableTextBlock[];
    seo?: {
        title?: string;
        description?: string;
        image?: any;
        noIndex?: boolean;
    };
    aboutImage?: any;
}

const { data: about } = await useSanityQuery<About>(aboutQuery);

useSeo({
    seo: about.value?.seo,
    fallbackTitle: about.value?.seo?.title || "Hakkımızda",
    fallbackDescription:
        about.value?.seo?.description ||
        "Fabel Tiyatro - Sahneye koyduğumuz tüm oyunları keşfedin.",
});
</script>
<template>
    <main class="o-page-grid o-grid o-grid--flush" role="main" id="site-main" tabindex="-1">
        <div class="o-page-grid__header" id="page-header">
            <header class="c-page-header o-grid c-page-header--image">
                <div class="c-page-header__media">
                    <SanityImage v-if="about?.aboutImage" :asset-id="about?.aboutImage.asset._ref || about?.aboutImage.asset._id
                        " class="o-image o-image--picture" />
                </div>
                <div class="c-page-header__wrapper">
                    <div class="c-page_header__text">
                        <h1 class="c-page-header__title">Hakkımızda</h1>
                    </div>
                </div>
            </header>
        </div>
        <div class="o-page-grid__content" id="page-content">
            <section class="o-grid o-grid--content-block">
                <div
                    class="o-block o-text o-text-block o-grid__item h-colstart--1 h-colend--9 h-phone-colstart--1 h-phone-colend--13 has-h-col o-block--row-1">
                    <SanityContent :value="about?.description" />
                </div>
                <div class="o-block o-banner o-grid__item o-block--row-3">
                    <NuxtLink to="/mail-listesi" class="c-banner c-banner--image" data-sc-gtm-category="Banner"
                        data-sc-gtm-label="Listeye Katılın">
                        <div class="c-banner__text">
                            <h2 class="c-banner__title">Listeye Katılın</h2>
                            <div class="c-banner__summary">
                                <p>
                                    Oyunlarımızdan, seyircili provalarımızdan ve bilet
                                    kampanyalarımızdan ilk siz haberdar olun
                                </p>
                            </div>
                            <div class="c-banner__action o-button o-button--outline">
                                <span class="o-button__text">Mail Listemize Katılın</span>
                                <span class="o-button__icon icon i-chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                                        viewBox="0 0 70 70">
                                        <path fill-rule="evenodd"
                                            d="M13.646 9.111a2.121 2.121 0 0 1 0-3.048l5.689-5.48a2.07 2.07 0 0 1 2.878 0l34.141 32.893.07.07a2.121 2.121 0 0 1-.07 2.978l-34.14 32.894a2.07 2.07 0 0 1-2.88 0l-5.688-5.481a2.121 2.121 0 0 1 0-3.048L40.516 35 13.646 9.111Z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="o-image o-image--cover c-banner__image">
                            <img :src="mailingListBanner" alt="Mail listesi banner" class="o-image__img" />
                        </div>
                    </NuxtLink>
                </div>
            </section>
        </div>
    </main>
</template>
