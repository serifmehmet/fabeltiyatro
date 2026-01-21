<script setup lang="ts">
import type { PortableTextBlock } from "@portabletext/types";
import { usePlayTabs } from "~/composables/usePlayTabs";

interface Props {
  playDescription?: PortableTextBlock[];
  casts?: Array<{
    fullName: string;
    actorImage?: any;
  }>;
  backstage?: Array<{
    order: number;
    member: {
      fullName: string;
      image?: any;
    };
    roles: string[];
  }>;
  events?: Array<{
    _id: string;
    date?: string;
    place?: string;
    ticketLink?: string;
  }>;
  gallery?: any[];
  title?: string;
}

const props = defineProps<Props>();
const { isActive } = usePlayTabs();
</script>

<template>
  <div class="o-sidebar-grid__content" id="page-content">
    <!-- About the Play Tab -->
    <section class="o-grid o-tab" id="content-the-play" aria-labelledby="tab-the-play" role="tabpanel" tabindex="-1"
      :hidden="!isActive('content-the-play')">
      <h2 class="h-accessibility">Oyun Hakkında</h2>
      <div v-if="playDescription && playDescription.length > 0"
        class="o-block o-text o-text-block o-grid__item h-colstart--1 h-colend--9 h-phone-colstart--1 h-phone-colend--13 has-h-col o-block--row-1">
        <SanityContent :value="playDescription" />
      </div>
      <div v-else
        class="o-block o-text o-text-block o-grid__item h-colstart--1 h-colend--9 h-phone-colstart--1 h-phone-colend--13">
        <p>Bu oyun hakkında henüz bilgi eklenmemiş.</p>
      </div>
    </section>

    <!-- Cast & Crew Tab -->
    <section class="o-grid o-tab" id="content-the-company" aria-labelledby="tab-the-company" role="tabpanel"
      :hidden="!isActive('content-the-company')">
      <div class="o-block o-grid__item o-block--row-1">
        <h3 class="o-block__heading">Ekİp ve Oyuncular</h3>
        <CastList v-if="casts && casts.length > 0" :casts="casts" />
        <div v-else class="empty-state">
          <p>Ekip bilgisi henüz eklenmemiş.</p>
        </div>
      </div>
      <div class="o-block o-grid__item o-block--row-2">
        <BackstageList v-if="backstage && backstage.length > 0" :backstage="backstage" />
        <div v-else class="empty-state">
          <p>Ekip bilgisi henüz eklenmemiş.</p>
        </div>
      </div>
    </section>

    <!-- Events Schedule Tab -->
    <section class="o-grid o-tab" id="content-events" aria-labelledby="tab-the-events" role="tabpanel"
      :hidden="!isActive('content-events')">
      <div class="o-grid__item o-block">
        <h2 class="o-block__heading">OYUN TARİHLERİ</h2>
        <EventsSchedule v-if="events && events.length > 0" :events="events" />
        <div v-else class="empty-state">
          <p>Henüz planlanmış bir oyun tarihi bulunmuyor.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Tab -->
    <section class="o-grid o-tab" id="content-gallery" aria-labelledby="tab-the-gallery" role="tabpanel"
      :hidden="!isActive('content-gallery')">
      <div class="o-grid__item o-block">
        <h2 class="o-block__heading">Galerİ</h2>
        <PlayGallery v-if="gallery && gallery.length > 0" :gallery="gallery" :title="title" />
        <div v-else class="empty-state">
          <p>Galeri görüntüsü henüz eklenmemiş.</p>
        </div>
      </div>
    </section>

    <!-- Rehearsal Notes Tab -->
    <section class="o-grid o-tab" id="content-rehearsal-notes" aria-labelledby="tab-the-rehearsal-notes" role="tabpanel"
      :hidden="!isActive('content-rehearsal-notes')">
      <h2 class="h-accessibility">Prova Notları</h2>
      <div class="o-grid__item h-colstart--1 h-colend--13">
        <div class="empty-state">
          <p>Prova notları yakında eklenecek.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.o-tab[hidden] {
  display: none;
}
</style>
