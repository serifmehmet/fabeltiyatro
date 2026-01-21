<script lang="ts" setup>
import contactBanner from "~/assets/images/contact-image.jpg";
</script>
<template>
    <main class="o-page-grid o-grid o-grid--flush" id="site-main" role="main" tabindex="-1">
        <div class="o-page-grid__header" id="page-header">
            <header class="c-page-header o-grid c-page-header--image">
                <div class="c-page-header__media">
                    <img :src="contactBanner" alt="" class="o-image o-image--picture" />
                </div>
                <div class="c-page-header__wrapper">
                    <div class="c-page-header__text">
                        <h1 class="c-page-header__title">İletişim</h1>
                    </div>
                </div>
            </header>
        </div>
        <div class="o-page-grid__content" id="page-content">
            <section class="o-grid o-grid--content-block">
                <div
                    class="o-block o-text o-text-block o-grid__item h-colstart--1 h-colend--7 h-phone-colstart--1 h-phone-colend--13 has-h-col o-block--row-1">
                    <h3>Bize ulaşın</h3>
                    <p>E-Posta adresimiz:</p>
                    <p>
                        <a href="mailto:fabeltiyatro@gmail.com">fabeltiyatro@gmail.com</a>
                    </p>
                </div>
            </section>
        </div>
    </main>
</template>
