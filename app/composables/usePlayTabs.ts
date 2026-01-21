import { ref } from 'vue'

export type TabId =
  | 'content-the-play'
  | 'content-the-company'
  | 'content-events'
  | 'content-gallery'
  | 'content-rehearsal-notes'

const activeTab = ref<TabId>('content-the-play')

export const usePlayTabs = () => {
  const setActiveTab = (tabId: TabId) => {
    activeTab.value = tabId
  }

  const isActive = (tabId: TabId) => activeTab.value === tabId

  return {
    activeTab,
    setActiveTab,
    isActive
  }
}
