<script setup lang="ts">
interface Event {
  _id: string;
  date?: string;
  time?: string;
  place?: string;
  ticketLink?: string;
}

interface Props {
  events?: Event[];
}

const props = defineProps<Props>();

const formatEventDate = (dateString: string | undefined) => {
  if (!dateString) return { date: "", time: "", weekday: "" };

  const date = new Date(dateString);
  return {
    weekday: date.toLocaleDateString("tr-TR", { weekday: "long" }),
    date: date.toLocaleDateString("tr-TR", { day: "numeric", month: "long" }),
    time: date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};
</script>

<template>
  <ul class="o-list o-block__content">
    <li class="c-instance o-list__item" v-for="event in events" :key="event._id">
      <h3 class="c-instance__heading">
        <time>{{ formatEventDate(event.date).date }}
          {{ formatEventDate(event.date).weekday }} {{ event.time }}
        </time>
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

<style scoped></style>
