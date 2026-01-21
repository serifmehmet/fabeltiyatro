<script setup lang="ts">
interface CastMember {

    fullName: string,
    actorImage?: any

}
interface Props {
    casts?: CastMember[]
}

const props = defineProps<Props>()
</script>
<template>
    <ul class="o-grid o-grid--contained o-grid--compact o-list">
        <li class="o-grid__item h-colspan--442" v-for="(castMember, index) in props.casts" :key="index">
            <div class="c-profile">
                <div class="o-image c-profile__image">
                    <SanityImage v-if="castMember.actorImage"
                        :asset-id="castMember.actorImage.asset._ref || castMember.actorImage.asset._id" :width="364"
                        :height="510" :alt="castMember.fullName" class="o-image__img" loading="lazy"
                        style="--object-position: 50% 50%;" />
                </div>
                <div class="c-profile__text">
                    <h3 class="c-profile__name">
                        {{ castMember.fullName }}
                    </h3>
                    <dl class="c-profile__meta">
                        <dd class="c-profile__role">Oyuncu</dd>
                    </dl>
                </div>
            </div>
        </li>
    </ul>
</template>