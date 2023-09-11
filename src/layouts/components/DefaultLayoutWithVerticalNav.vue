<script lang="ts" setup>
import navItems from "@/navigation/vertical";
import { useThemeConfig } from "@core/composable/useThemeConfig";
import { useI18n } from "vue-i18n";
// import { self } from '@/stores/self';
import UserProfile from "@/layouts/components/UserProfile.vue";
import settings from '@/layouts/components/Settings.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import Notification from "@/views/Notification.vue";
import { VerticalNavLayout } from "@layouts";
import { useRouter, useRoute } from 'vue-router'
// Components
// import Footer from "@/layouts/components/Footer.vue";
// import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
// @layouts plugin

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig();
const { width: windowWidth } = useWindowSize();
const { locale, t } = useI18n();
const router = useRouter()
const navigateToMessagePage = () => {
  router.push({name:'messagelist'})
}
// const user = self();

// const navItemsVertical = computed(()=>{
//   let role = user.userData && user.userData.role
//   // check and return only list which are accessBy role-wise
//   return navItems.filter((item: any)=> {
//     return item.accessBy.includes(role)
//   })
// })
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          id="vertical-nav-toggle-btn"
          class="ms-n3"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon size="26" icon="tabler-menu-2" />
        </IconBtn>

        <!-- <NavbarThemeSwitcher /> -->

        <VSpacer />
        <settings/>
        
        <IconBtn @click="navigateToMessagePage">
          <img
            size="26"
            src="../../assets/images/svg/message.svg"
            alt="" />
        </IconBtn>
        <IconBtn>
        <Notification />
        </IconBtn>
        <NavBarI18n class="me-1" />
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition :name="appRouteTransition" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
<!--     <template #footer>
      <Footer />
    </template>
 -->
    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
