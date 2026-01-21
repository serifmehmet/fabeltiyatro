<script setup lang="ts">
interface Event {
  _id: string
  date?: string
  time?: string
  place?: string
  ticketLink?: string
}

interface Props {
  events?: Event[]
}

const props = defineProps<Props>()

const formatEventDate = (dateString: string | undefined) => {
  if (!dateString) return { date: '', time: '', weekday: '' }

  const date = new Date(dateString)
  return {
    weekday: date.toLocaleDateString('tr-TR', { weekday: 'long' }),
    date: date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' }),
    time: date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  }
}
</script>

<template>
  <ul class="o-list o-block__content">
    <li class="c-instance o-list__item" v-for="event in events" :key="event._id">
      <h3 class="c-instance__heading">
        <time>{{ formatEventDate(event.date).date }} {{ formatEventDate(event.date).weekday }} {{ event.time }} </time>
      </h3>
      <dl class="c-instance__meta">
        <dd class="c-instance__note">

          {{ event.place }}
        </dd>
      </dl>
      <div class="c-instance__action">
        <a v-if="event.ticketLink" :href="event.ticketLink" target="_blank" rel="noopener noreferrer"
          class="o-button o-button o-button--small">
          <span class="o-button__text">Bilet Al</span>
          <span class="o-button__icon icon i-chevron" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 70 70">
              <path fill-rule="evenodd"
                d="M13.646 9.111a2.121 2.121 0 0 1 0-3.048l5.689-5.48a2.07 2.07 0 0 1 2.878 0l34.141 32.893.07.07a2.121 2.121 0 0 1-.07 2.978l-34.14 32.894a2.07 2.07 0 0 1-2.88 0l-5.688-5.481a2.121 2.121 0 0 1 0-3.048L40.516 35 13.646 9.111Z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </a>
      </div>
    </li>
  </ul>

</template>

<style scoped lang="postcss">
.events-section {
  @apply py-12;
}

.section-title {
  @apply mb-8 text-3xl font-bold main-text-color md:text-4xl;
}

.events-list {
  @apply space-y-4;
}

.event-card {
  @apply flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-accent/50 md:flex-row md:items-center md:justify-between;
}

.event-date-info {
  @apply flex-1 space-y-1;
}

.event-weekday {
  @apply text-sm font-medium uppercase tracking-wider text-accent;
  letter-spacing: 0.1em;
}

.event-date {
  @apply text-lg font-semibold main-text-color;
}

.event-time {
  @apply text-sm main-text-color;
}

.event-venue {
  @apply mt-2 flex items-center gap-2 text-sm main-text-color;
}

.venue-icon {
  @apply h-4 w-4;
}

.event-actions {
  @apply flex items-center;
}

.event-ticket-btn {
  @apply rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-night transition hover:bg-accent/90;
  letter-spacing: 0.1em;
}
</style>
