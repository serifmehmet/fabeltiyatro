<script setup lang="ts">
import { usePlayTabs, type TabId } from "~/composables/usePlayTabs";
interface Props {
  title: string;
  subTitle?: string;
  image?: any;
  premiereDate?: string;
  playDuration?: string;
  ticketLink?: string;
}

const props = defineProps<Props>();

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const { setActiveTab } = usePlayTabs();

const handleTicketClick = () => {
  setActiveTab("content-events");
  // Wait for next tick to ensure DOM is updated after tab change
  nextTick(() => {
    const element = document.getElementById("content-events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
};
</script>

<template>
  <div class="o-sidebar-grid__header" id="page-header">
    <header class="c-page-header o-grid c-page-header--event c-page-header--event-small c-page-header--image">
      <div class="c-page-header__media">
        <SanityImage v-if="image" :asset-id="image.asset._ref || image.asset._id" :alt="title"
          class="o-image o-image--picture" />
      </div>
      <div class="c-page-header__wrapper">
        <div class="c-page-header__text">
          <h1 class="c-page-header__title">
            {{ title }}
          </h1>
          <span class="c-page-header__summary">
            {{ subTitle }}
          </span>
        </div>
        <div class="c-page-header__meta">
          <a @click="handleTicketClick" class="o-button">
            <span class="o-button__text">
              <span>Bilet Al</span>
            </span>
            <span class="o-button__icon icon i-chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 70 70">
                <path fill-rule="evenodd"
                  d="M13.646 9.111a2.121 2.121 0 0 1 0-3.048l5.689-5.48a2.07 2.07 0 0 1 2.878 0l34.141 32.893.07.07a2.121 2.121 0 0 1-.07 2.978l-34.14 32.894a2.07 2.07 0 0 1-2.88 0l-5.688-5.481a2.121 2.121 0 0 1 0-3.048L40.516 35 13.646 9.111Z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped></style>
