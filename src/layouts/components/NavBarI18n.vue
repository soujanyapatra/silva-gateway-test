<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue'
// import { useThemeConfig } from '@core/composable/useThemeConfig'
import type { I18nLanguage } from '@layouts/types'
import {useLocaleStore} from '../../stores/locale/locale'
// const { isAppRtl } = useThemeConfig()

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
  },
  {
    label: 'Bahasa',
    i18nLang: 'id',
  }
]

const handleLangChange = (lang: string) => {
  // isAppRtl.value = lang === 'ar'
  useLocaleStore().setLocale = lang
  // location.reload()
}
</script>

<template>
  <div>
    <NavBarI18n
      :languages="i18nCompLanguages"
      @change="handleLangChange"
    />
  </div>
</template>
