<script setup lang="ts">
import type { I18nLanguage } from '@layouts/types'
import { useI18n } from 'vue-i18n'
import enImg from '@images/flags/en.png'
import idImg from '@images/flags/id.png'
import i18n from "@/plugins/i18n";

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
})

defineEmits<{
  (e: 'change', id: string): void
}>()

interface Props {
  languages: I18nLanguage[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location?: any
}

const { locale } = useI18n({ useScope: 'global' })
console.log('locale: ', locale);

watch(locale, val => {
  document.documentElement.setAttribute('lang', val as string)
})

// only show which not selected
const notSelectedLang = computed(() => (lang: any)=>{
  return lang.filter((l: any) => {
    return l.i18nLang !== i18n.global.locale._value
  })
})

const currentLang = ref(['en','id'])
</script>

<template>
  <IconBtn>
    <img
      size="26"
      src="../../assets/images/svg/world.svg"
      alr=""
    />

    <!-- Menu -->
    <VMenu
      activator="parent"
      :location="props.location"
      offset="14px"
    >
      <!-- List -->
      <VList
        v-model:selected="currentLang"
      >
        <!-- List item -->
        <VListItem
          v-for="lang in notSelectedLang(props.languages)"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
          @click="locale = lang.i18nLang; $emit('change', lang.i18nLang)"
        >
          <!-- Language label -->
          <VListItemTitle class="d-flex">
            <VImg class="mr-3 w-25" :src="lang.i18nLang == 'en' ? enImg : idImg" alt="gb" />
            <span style="width: 90px;">{{ lang.label }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
