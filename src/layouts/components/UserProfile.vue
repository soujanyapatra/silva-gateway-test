<template>
  <VCardSubtitle class="user-profile-subtitle-line">
    <span v-if="userStore.userData && userStore.userData.role" class="user-profile-title float-right"> {{ userStore && userStore.userData ? userStore.userData.companyName : '--' }} </span><br />
    <p v-if="userStore.userData && userStore.userData.role == 'admin'">
      <span>{{ userStore.userData && userStore.userData.role }}</span>
    </p>
    <div class="mt-1">
      <small class="small float-right">{{ $t("labels.available") }}</small>
    </div>
  </VCardSubtitle>
  <VAvatar class="cursor-pointer" color="primary" variant="tonal">
    <img
      height="40"
      width="40"
      class="logo-container"
      src="../../assets/images/admin/logo.png"
      alt=""
    />

    <!-- SECTION Menu -->
    <VMenu activator="parent" width="230" location="bottom end" offset="14px">
      <VList>
        <!-- 👉 Logout -->
        <VListItem @click="logOutUser">
          <template #prepend>
            <VIcon class="me-2" icon="tabler-logout" size="22" />
          </template>

          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { self } from "@/stores/self";

export default defineComponent({
  setup() {
    const router = useRouter();
    let userStore = self()

    function logOutUser() {
      localStorage.clear()
      // push to the login screen
      router.push("/login");
      setTimeout(() => {
        userStore.userData = {}
      }, 2000);
    }
    return {
      logOutUser,
      router,
      userStore
    };
  },
});
</script>
<style lang="scss" scoped>
.user-profile-title {
  color: #28303d !important;
  font-size: 16px !important;
  text-transform: capitalize !important;
  font-weight: 600 !important;
}

.subtitle {
  color: #888 !important;
  font-weight: 400 !important;
}
.small{
  color: #888;
  font-size: 12px;
  font-weight: 500;
}
</style>