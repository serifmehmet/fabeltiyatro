<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePlayTabs, type TabId } from '~/composables/usePlayTabs'

const { setActiveTab, isActive, activeTab } = usePlayTabs()
const isMenuOpen = ref(false)

const tabLabels: Record<TabId, string> = {
    'content-the-play': 'Oyun Hakkında',
    'content-the-company': 'Ekip',
    'content-events': 'Oyun Tarihleri',
    'content-gallery': 'Galeri',
    'content-rehearsal-notes': 'Prova Notları'
}

const currentTabLabel = computed(() => tabLabels[activeTab.value])

const handleTabClick = (event: Event, tabId: TabId) => {
    event.preventDefault()
    setActiveTab(tabId)

    // Update data-current attribute on nav element
    const navElement = document.getElementById('event-tabs')
    if (navElement) {
        navElement.setAttribute('data-current', tabId)
    }

    // Close the mobile menu after selecting a tab
    if (isMenuOpen.value) {
        toggleMenu()
    }
}

const handleMobileTabClick = (event: Event, tabId: TabId) => {
    handleTabClick(event, tabId)

    // Smooth scroll to the selected section for mobile tabs
    const targetElement = document.getElementById(tabId)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
    <div class="o-sidebar-grid__menu o-sidebar-grid__menu--sticky">
        <div class="c-event-nav o-grid">
            <div class="c-event-nav__inner">
                <nav class="o-nav o-tab-nav" aria-label="Oyun Bilgileri" id="event-tabs" data-current="">
                    <div :class="['o-nav', 'o-nav--dropdown', 'o-tab-nav__dropdown', 'h-hide-tablet--gt', { 'is-active': isMenuOpen }]"
                        id="tab-menu">
                        <button
                            :class="['o-nav__action', 'o-button', 'o-button--secondary', { 'is-active': isMenuOpen }]"
                            data-toggle-class-target="tab-menu" @click="toggleMenu">
                            <span class="o-button__text o-nav__action-text-closed">
                                Detaylı Bilgi
                            </span>
                            <span class="o-button__text o-nav__action-text-open">
                                <span class="h-accesibility">"Seçili tab:"</span>
                                <span class="o-tab-nav__current">{{ currentTabLabel }}</span>
                            </span>
                            <span class="o-button__icon o-nav__action-icon icon i-chevron" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                                    viewBox="0 0 70 70">
                                    <path fill-rule="evenodd"
                                        d="m60.889 13.646.07-.07a2.121 2.121 0 0 1 2.978.07l5.48 5.689a2.07 2.07 0 0 1 0 2.878L36.525 56.354a2.121 2.121 0 0 1-3.048 0L.582 22.214a2.07 2.07 0 0 1 0-2.88l5.481-5.688a2.121 2.121 0 0 1 3.048 0L35 40.516l25.889-26.87Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </button>
                        <!-- Mobile tabs-->
                        <ul class="o-nav__list o-tab-nav__list">
                            <li class="o-nav__item o-tab-nav__item">
                                <a href="#content-the-play"
                                    :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-the-play') }]"
                                    id="tab-the-play" data-menu="mobile" role="tab" aria-controls="content-the-play"
                                    :tabindex="isActive('content-the-play') ? 0 : -1"
                                    :aria-selected="isActive('content-the-play')"
                                    @click="handleMobileTabClick($event, 'content-the-play')">
                                    <span class="o-tab-nav__label">
                                        Oyun Hakkında
                                    </span>

                                </a>
                            </li>
                            <li class="o-nav__item o-tab-nav__item">
                                <a href="#content-the-company"
                                    :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-the-company') }]"
                                    id="tab-the-company" data-menu="mobile" role="tab"
                                    aria-controls="content-the-company"
                                    :tabindex="isActive('content-the-company') ? 0 : -1"
                                    :aria-selected="isActive('content-the-company')"
                                    @click="handleMobileTabClick($event, 'content-the-company')">
                                    <span class="o-tab-nav__label">
                                        Ekip
                                    </span>

                                </a>
                            </li>
                            <li class="o-nav__item o-tab-nav__item">
                                <a href="#content-events"
                                    :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-events') }]"
                                    id="tab-the-events" data-menu="mobile" role="tab" aria-controls="content-the-events"
                                    :tabindex="isActive('content-events') ? 0 : -1"
                                    :aria-selected="isActive('content-events')"
                                    @click="handleMobileTabClick($event, 'content-events')">

                                    <span class="o-tab-nav__label">
                                        Oyun Tarihleri
                                    </span>
                                </a>
                            </li>
                            <li class="o-nav__item o-tab-nav__item">
                                <a href="#content-gallery"
                                    :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-gallery') }]"
                                    id="tab-the-gallery" data-menu="mobile" role="tab"
                                    aria-controls="content-the-gallery" :tabindex="isActive('content-gallery') ? 0 : -1"
                                    :aria-selected="isActive('content-gallery')"
                                    @click="handleMobileTabClick($event, 'content-gallery')">
                                    Galeri
                                </a>
                            </li>
                            <li class="o-nav__item o-tab-nav__item">
                                <a href="#content-rehearsal-notes"
                                    :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-rehearsal-notes') }]"
                                    id="tab-the-rehearsal-notes" data-menu="mobile" role="tab"
                                    aria-controls="content-the-rehearsal-notes"
                                    :tabindex="isActive('content-rehearsal-notes') ? 0 : -1"
                                    :aria-selected="isActive('content-rehearsal-notes')"
                                    @click="handleMobileTabClick($event, 'content-rehearsal-notes')">
                                    Prova Notları
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- Desktop tabs -->
                    <ul class="o-nav__list o-tab-nav__list h-hide-tablet">
                        <li class="o-nav__item o-tab-nav__item" role="presentation">
                            <a href="#content-the-play"
                                :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-the-play') }]"
                                id="tab-the-play" data-menu="desktop" role="tab" aria-controls="content-the-play"
                                :tabindex="isActive('content-the-play') ? 0 : -1"
                                :aria-selected="isActive('content-the-play')"
                                @click="handleTabClick($event, 'content-the-play')">
                                Oyun Hakkında
                            </a>
                        </li>
                        <li class="o-nav__item o-tab-nav__item" role="presentation">
                            <a href="#content-the-company"
                                :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-the-company') }]"
                                id="tab-the-company" data-menu="desktop" role="tab" aria-controls="content-the-company"
                                :tabindex="isActive('content-the-company') ? 0 : -1"
                                :aria-selected="isActive('content-the-company')"
                                @click="handleTabClick($event, 'content-the-company')">
                                Ekip
                            </a>
                        </li>
                        <li class="o-nav__item o-tab-nav__item" role="presentation">
                            <a href="#content-events"
                                :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-events') }]"
                                id="tab-the-events" data-menu="desktop" role="tab" aria-controls="content-the-events"
                                :tabindex="isActive('content-events') ? 0 : -1"
                                :aria-selected="isActive('content-events')"
                                @click="handleTabClick($event, 'content-events')">
                                Oyun Tarihleri
                            </a>
                        </li>
                        <li class="o-nav__item o-tab-nav__item" role="presentation">
                            <a href="#content-gallery"
                                :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-gallery') }]"
                                id="tab-the-gallery" data-menu="desktop" role="tab" aria-controls="content-the-gallery"
                                :tabindex="isActive('content-gallery') ? 0 : -1"
                                :aria-selected="isActive('content-gallery')"
                                @click="handleTabClick($event, 'content-gallery')">
                                Galeri
                            </a>
                        </li>
                        <li class="o-nav__item o-tab-nav__item" role="presentation">
                            <a href="#content-rehearsal-notes"
                                :class="['o-nav__link', 'o-tab-nav__link', { 'is-active': isActive('content-rehearsal-notes') }]"
                                id="tab-the-rehearsal-notes" data-menu="desktop" role="tab"
                                aria-controls="content-the-rehearsal-notes"
                                :tabindex="isActive('content-rehearsal-notes') ? 0 : -1"
                                :aria-selected="isActive('content-rehearsal-notes')"
                                @click="handleTabClick($event, 'content-rehearsal-notes')">
                                Prova Notları
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>