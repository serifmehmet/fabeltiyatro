<script setup lang="ts">
interface Props {
  gallery?: any[]
  title?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section v-if="gallery && gallery.length > 0" class="gallery-section">
    <div class="masonry-grid">
      <div
        v-for="(image, index) in gallery"
        :key="index"
        class="masonry-item"
      >
        <SanityImage
          v-if="image"
          :asset-id="image.asset._ref || image.asset._id"
          :alt="`${title} - Fotoğraf ${index + 1}`"
          class="masonry-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  width: 100%;
}

.masonry-grid {
  column-count: 1;
  column-gap: 1rem;
}

@media (min-width: 640px) {
  .masonry-grid {
    column-count: 2;
    column-gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
    column-gap: 1.5rem;
  }
}

.masonry-item {
  margin-bottom: 1rem;
  break-inside: avoid;
  overflow: hidden;
  border-radius: 0.5rem;
  display: inline-block;
  width: 100%;
}

@media (min-width: 640px) {
  .masonry-item {
    margin-bottom: 1.5rem;
  }
}

.masonry-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}

.masonry-image:hover {
  transform: scale(1.05);
}
</style>
