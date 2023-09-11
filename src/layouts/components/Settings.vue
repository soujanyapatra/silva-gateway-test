<script setup lang="ts">
import $http from "@/plugins/axios";
import { layout } from "../../stores/layout";
import { useToast } from "vue-toastification";
import {
  validateWithFieldName,
  minMaxValidateWithFiledName,
} from "@validators";
import { useRouter } from "vue-router";
import { VForm } from "vuetify/components/VForm";
// import { useNotifyStore } from "@/stores/notification";
// import { self } from "@/stores/self";

// const store = useNotifyStore();
// const { notify } = storeToRefs(store);
const notificationStatus: Ref<boolean> = ref(false);
const $toast = useToast();
let deleteAccountDialog: Ref<boolean> = ref(false);
let reasonDelete: Ref<any> = ref();
let refVForm = ref<VForm>();
let router = useRouter();
let layoutScreen = layout();
const userdata: Ref<any> = ref(JSON.parse(localStorage.getItem("user") as any));
let id: Ref<any> = ref("");
id = userdata.value ? userdata.value.id : "";
let userSelf = ref(false)

// Delete Account
async function DeleteAccount() {
  refVForm.value?.validate().then(async (res) => {
    if (res.valid) {
      try {
        layoutScreen.fullScreenLoad = true;
        let param = {
          reason: reasonDelete.value,
        };
        let res = await $http.delete("/auth/user", param);

        if (res) {
          layoutScreen.fullScreenLoad = false;

          $toast.success("Account has been deleted successfully");
          localStorage.clear();
          router.push("/login");
        }
      } catch (e) {
        // dummy error message
        $toast.error("error occurred");
      } finally {
        // stop loading
        layoutScreen.fullScreenLoad = false;
      }
    }
  });
}

// Notification change
</script>

<template>
  <section>
    <div>
      <IconBtn>
        <img size="26" src="../../assets/images/svg/setting.svg" alt="" />
      </IconBtn>

      <VMenu activator="parent" width="230" location="bottom end" offset="7px">
        <VList class="setting-list">
          <VListItem height="30" class="settingtitle">
            <VListItemTitle>{{ $t("labels.settings") }}</VListItemTitle>
          </VListItem>
          <VDivider />

          <VListItem>
            <VListItemTitle>
              <div class="d-flex justify-space-between">
                <span>{{ $t("labels.notification") }}</span>

                <span>
                  <VSwitch
                    v-model="userSelf"
                /></span>
              </div>
            </VListItemTitle>
          </VListItem>
          <VDivider />
          <VListItem
            @click="
              () => {
                router.push('card-details');
              }
            "
          >
            <VListItemTitle>
              <div class="">
                <span>{{ $t("labels.card_detail") }}</span>
              </div>
            </VListItemTitle>
          </VListItem>
          <VDivider />
          <VListItem
            @click="
              () => {
                router.push('change-password');
              }
            "
          >
            <VListItemTitle>
              <div class="">
                <span>{{ $t("labels.change_password") }}</span>
              </div>
            </VListItemTitle>
          </VListItem>
          <VDivider />
          <VListItem @click="deleteAccountDialog = true" class="deletetitle">
            <VListItemTitle>
              <div class="pl-2">
                <span>{{ $t("labels.delete_account") }}</span>
              </div>
            </VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>

      <VDialog v-model="deleteAccountDialog" max-width="650">
        <DialogCloseBtn @click="deleteAccountDialog = false" />
        <VForm ref="refVForm">
          <VCard>
            <VCardText>
              <span class="delete-account-headline">
                {{ $t("strings.reject_reason") }}
              </span>
              <VRow>
                <VCol cols="12">
                  <AppTextarea
                    counter="250"
                    rows="3"
                    class="textarea-delete-acc mt-5"
                    v-model="reasonDelete"
                    :rules="[
                      validateWithFieldName(
                        reasonDelete,
                        $t('errors.reasonDelete')
                      ),
                      minMaxValidateWithFiledName(
                        reasonDelete,
                        1,
                        250,
                        $t('errors.reasonDelete')
                      ),
                    ]"
                  />
                </VCol>
              </VRow>
              <VCardActions>
                <VSpacer />
                <VRow class="d-flex">
                  <VCol cols="12">
                    <div class="float-right">
                      <VBtn
                        color="primary"
                        class="dlt-btn text-white"
                        :disabled="!reasonDelete"
                        @click="DeleteAccount()"
                        >{{ $t("strings.delete") }}</VBtn
                      >
                      <VBtn
                        color="black"
                        class="vs-component cnc-btn text-white"
                        @click="deleteAccountDialog = false"
                        >{{ $t("strings.cancel") }}</VBtn
                      >
                    </div>
                  </VCol>
                </VRow>
              </VCardActions>
            </VCardText>
          </VCard>
        </VForm>
      </VDialog>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
