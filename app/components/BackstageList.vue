<script setup lang="ts">
interface BackstageMember {
  order: number
  member: {
    fullName: string
    image?: any
  }
  roles: string[]
}

interface Props {
  backstage?: BackstageMember[]
}

const props = defineProps<Props>()

// Sort cast by order
const sortedBackstage = computed(() => {
  if (!props.backstage) return []
  return [...props.backstage].sort((a, b) => a.order - b.order)
})
</script>

<template>
  <ul class="o-grid o-grid--contained o-grid--list o-list">
    <li class="c-staff-block o-grid__item h-colspan--331" v-for="(backstageItem, index) in sortedBackstage"
      :key="index">


      <h4 class="c-staff-block__name">
        {{ backstageItem.member.fullName }}
      </h4>
      <dd class="c-staff-block__value" v-if="backstageItem.roles && backstageItem.roles.length > 0">{{
        backstageItem.roles.join(', ')
        }}</dd>
    </li>
  </ul>

</template>

<style scoped></style>
