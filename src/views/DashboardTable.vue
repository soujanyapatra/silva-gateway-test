<template>
  <section>
    <div class="transactions mt-15">
      <VCard class="mt-5">
        <div class="card-title mt-5 d-flex justify-content-between flex-wrap">
          <h3 class="ml-6">
            {{ $t("my_account.strings.rec_trans") }}
          </h3>
          <VBtn
            @click="viewDetails()"
            class="vs-button-silva edit-user mr-6"
            icon-pack="feather"
          >
            {{ $t("strings.see_all") }}</VBtn
          >
        </div>
        <VCardText>
          <div>
            <VDataTable
              class="remove-footer"
              :headers="headers"
              :items="transactions"
              :items-per-page="5"
              :no-data-text="$t('No Data Available')"
              :hover="true"
            >
              <template #item.transactionId="{ item }">
                <div style="min-width: 100px">
                  <span class="float-left" v-if="item.raw.amount < 0">
                    <img
                      height="30"
                      width="30"
                      class="avatar-2 mr-2"
                      src="../assets/images/transactions/deposite.svg"
                    />
                  </span>
                  <span class="float-left" v-else-if="item.raw.amount > 0">
                    <img
                      height="30"
                      width="30"
                      class="avatar-2 mr-2"
                      src="../assets/images/transactions/Add.svg"
                    />
                  </span>
                  <div style="display: flex; margin-top: 10px">
                    <span class="trns-Id" style="">{{
                      item.raw.transactionId ? item.raw.transactionId : "--"
                    }}</span>
                  </div>
                </div>
              </template>

              <template #item.createdDate="{ item }">
                <div class="d-flex">
                  <div class="d-flex flex-column">
                    <span class="text-content">
                      {{
                        item.raw.createdDate
                          ? moment(item.raw.createdDate).format(
                              "MM-DD-YYYY HH:mm A"
                            )
                          : "---"
                      }}</span
                    >
                  </div>
                </div>
              </template>

              <template #item.businessName="{ item }">
                <div class="d-flex">
                  <div
                    class="d-flex flex-colum"
                    v-if="
                      item.raw.toRole == 'member' ||
                      item.raw.toRole == 'Acc-admin'
                    "
                  >
                    <span class="text-content"
                      >{{
                        item.raw.businessName &&
                        item.raw.businessName.length > 12
                          ? $t(item.raw.businessName.substring(0, 12))
                          : item.raw.businessName
                      }}..</span
                    >
                  </div>
                  <div
                    class="d-flex flex-column"
                    v-else-if="item.raw.toRole == 'employee'"
                    :title="item.raw.name"
                  >
                    <span class="text-content"
                      >{{
                        item.raw.businessName
                          ? $t(item.raw.businessName.substring(0, 12))
                          : item.raw.name
                      }}..</span
                    >
                  </div>
                </div>
              </template>

              <template #item.description="{ item }">
                <div class="d-flex">
                  <div class="d-flex flex-column">
                    <span class="text-content">{{
                      item.raw.description ? $t(item.raw.description) : "--"
                    }}</span>
                  </div>
                </div>
              </template>

              <template #item.amount="{ item }">
                <div class="d-flex align-center" style="width: max-content;">
                  <span class="text-success" v-if="item.raw.amount > 0">
                    +<img src="../assets/images/green.png" alt="" width="10" class="mr-1" />
                    <span class="text-content text-success">
                      {{ item.raw.amount }}</span
                    >
                  </span>
                  <span class="ms-0 text-error" v-if="item.raw.amount < 0">
                    -<img src="../assets/images/red.png" alt="" width="10" class="mr-1" />
                    <span class="text-content text-error">
                      {{ Math.abs(item.raw.amount).toFixed(2) }}</span
                    >
                    <p v-if="!item.raw.amount">--</p>
                  </span>
                </div>
              </template>
            </VDataTable>
          </div>
        </VCardText>
      </VCard>
      <!-- <VRow class="d-flex">
        <VCol cols="12" class="mt-2">
          <VPagination
            v-if="transactions.length > 0"
            v-model="page"
            :length="pageCount"
            rounded="circle"
            :total-visible="$vuetify.display.mdAndUp ? 6 : 3"
            class="float-right"
          />
        </VCol>
      </VRow> -->
    </div>
  </section>
</template>

<script setup lang="ts">
interface AccountData {
  UserSub: string;
}
import moment from "moment";
import $http from "@/plugins/axios";
import { VDataTable } from "vuetify/labs/VDataTable";
import { layout } from "@/stores/layout";
import i18n from "@/plugins/i18n";

const { t } = i18n.global;
const router = useRouter();
const layoutScreen = layout();
const headers = computed(() => {
  return [
    { title: t("my_account.strings.trans_th1"), key: "transactionId", sortable: false },
    { title: t("my_account.strings.trans_th2"), key: "createdDate", sortable: false },
    { title: t("my_account.strings.trans_th4"), key: "businessName", sortable: false },
    { title: t("strings.note"), key: "description", sortable: false },
    { title: t("my_account.strings.trans_th5"), key: "amount", sortable: false },
  ]
})
// let page = ref(1);
// let pageCount = computed(() => {
//   return Math.ceil(transactions.value.length / 10);
// });
const accoun_no = ref<AccountData | null>(null);
const transactions = ref([]);

const viewDetails = () => {
  router.push("recent-transaction");
};

const addZeroes = (num: any) => {
  num = Number(num);
  num = num.toFixed(2);
  return num;
};

const last_days = ref([
  {
    text: "30 days",
    value: 30,
  },
  {
    text: "60 days",
    value: 60,
  },
  {
    text: "90 days",
    value: 90,
  },
]);

const back = () => {
  router.go(-1);
};
async function GetBusinessTableData() {
  try {
    if (accoun_no.value) {
      //  start loading
      layoutScreen.fullScreenLoad = true;
      let { data } = await $http.get(
        "account/statement?accountId=" + accoun_no.value.UserSub
      );
      if (data) {
        layoutScreen.fullScreenLoad = false;
        transactions.value = data.data;
      }
    }
  } catch (e) {
    layoutScreen.fullScreenLoad = false;
    console.log("error occurred");
  }
}
onMounted(async() => {
  accoun_no.value = JSON.parse(localStorage.getItem("User_id") ?? "");
  await GetBusinessTableData();
});
</script>

<style scoped>
.edit-user {
  height: 43px;
  padding: 12px 26px 12px 26px;
  font-size: 14px;
  transition: all .2s ease;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 400;
  text-transform: none !important;
}
.edit-user:hover{
  box-shadow: 0 8px 25px -8px #82e0dd !important;
}
.v-table__wrapper td {
  align-items: start !important;
}
.v-table > .v-table__wrapper > table > tbody > tr > td {
  padding: 0px 12px !important;
}
.trns-Id{
  color: black;
  margin-top: 7px;
  margin-left: 3px;
  min-width: max-content;
  margin-right: 10px !important;
}
</style>
