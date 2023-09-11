<template>
  <section>
    <Iconbtn class="alarm-container">
      <img class="mt-2" size="26" src="../assets/images/svg/bell.svg" alt=""/>
      <div v-if="notifications.length > 0 && notify && unreadNotification(notifications)" class="blink_me">
      </div>
    </Iconbtn>
    
    <VMenu activator="parent" width="300" location="bottom end" offset="14px">
      <VList class="vlist notifis-list">
        <VListItem height="50" class="py-3 m-0 px-4 notification">
          <VListItemTitle>{{ $t("Notifications") }} </VListItemTitle>
        </VListItem>

        <VListItem class="notification-value"
          v-for="(data, index) in notifications" :key="index"
         >
         <div @click="readNotification(data)" class="d-flex py-3 px-4 cursor-pointer items-start notification-container"
          :class="data?.isRead == false ? 'unread-notification' : ''">
          <div class="pr-2"> 
                <img
                  v-if="data?.type == 'requestMade'"
                  src="@/assets/images/paymentrequest.png"
                />
                <img
                  v-if="data?.type == 'amountAdded' || data?.type == 'referralSubscription' || data?.type == 'referralTransaction'"
                  src="@/assets/images/notification-2.png"
                />
                <img
                  v-if="data?.type == 'amountDeducted' || data?.type == 'scheduledOrRecurringNotification'"
                  src="@/assets/images/notification-1.png"
                />

                <VAvatar
                  v-if="data?.type == 'newDirectMessage'"
                  color="primary"
                  class="notification-avatar"
                >
                  <span class="text-lg">{{data?.fromUser?.name.substr(0, 1)}}</span>
                </VAvatar>

                <VAvatar
                  v-if="data?.type == 'transactionFailed' || data?.type == 'recurringTransactionFailed' || data?.type == 'transactionRemainder'"
                  color="primary"
                  class="notification-avatar"
                >
                  <v-icon icon="tabler-x">
                  </v-icon>
                </VAvatar>
              </div>
                <div v-if="data?.type == 'amountAdded'">
                  <span>{{ data?.title }}</span>
                  <p class="gray-sub mb-0">{{ data.message }}</p>
                </div>
                <div v-if="data?.type == 'amountDeducted'">
                  <span>{{ data?.title }}</span>
                  <p class="gray-sub mb-0">{{ data?.message }}</p>
                </div>
                <div v-if="data?.type == 'requestMade'">
                  <span>{{ data?.title }}</span>
                  <p class="gray-sub mb-0">
                    {{ data?.message }}
                  </p>
                </div>
                <div v-if="data?.type == 'newDirectMessage'">
                  <span>{{ data?.title }}</span>
                  <p class="gray-sub mb-0">{{ data?.message }}</p>
                </div>
                <div v-if="data?.type == 'referralSubscription' || data?.type == 'referralTransaction' || data?.type == 'scheduledOrRecurringNotification' || data?.type == 'transactionFailed' || data?.type == 'recurringTransactionFailed' || data?.type == 'transactionRemainder'">
                  <span>{{ data?.title }}</span>
                  <p class="gray-sub mb-0">{{ data?.message }}</p>
                </div>
         </div>
        </VListItem>

        <VDivider />

        <VListItem
        class="view-all-notification text-center"
          @click="
            () => {
              router.push('notification-details');
            }
          "
        >
          <VListItemTitle>
            <div>
              <span>{{ $t("View_All_Notifications") }}</span>
            </div>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </section>
</template>
<script setup>
      import { useRouter } from "vue-router";
      import $http from "@/plugins/axios";
      import { layout } from "@/stores/layout";
      // import{ useNotifyStore } from '../stores/notification';
      import { onBeforeUnmount } from 'vue';      
      // const store = useNotifyStore();
      const layoutScreen = layout();

      const { 
       notify
      } = storeToRefs(store);

      let router = useRouter();
      const accoun_no = ref({})
      const notifications = ref([])
      const allnotifications = ref([])
      const showBlink = ref(false)
      const role = ref({})
      const setNotifier = ref(false)

      onBeforeUnmount(() => {
        clearInterval(setNotifier.value);
      });

      onMounted(() => {
        if (role?.value?.role == "member" || role?.value?.role == "employee" || role?.value?.role == "Acc-admin" && notify?.value == true) {
          if(localStorage.getItem('User_id')){
            getNotifications();
          }
        }
      })

      function unreadNotification (notification) {
        return notification.some((n) => !n.isRead)
      }

      const readNotification = (data) => {
      if (data?.isRead == false) {
        layoutScreen.fullScreenLoad = true;
        $http.get(
            `/notification/push/read?id=${data?.id}`
          )
          .then((response) => {
            layoutScreen.fullScreenLoad = false;

            if (data?.type == "amountAdded" || data?.type == "amountDeducted") {
              router.push("/recent-transaction");
            } else if (data?.type == "requestMade") {
              router.push("/payment-request");
            } else if (data?.type == "newDirectMessage") {
              router.push("/messagelist");
            }
          })
          .catch((error) => {
            layoutScreen.fullScreenLoad = false;
            console.log("error occured in read notification api", error);
          });
      } else {
        if (data?.type == "amountAdded" || data?.type == "amountDeducted") {
          router.push("/recent-transaction");
        } else if (data?.type == "requestMade") {
          router.push("/payment-request");
        } else if (data?.type == "newDirectMessage") {
          router.push("/messagelist");
        }
      }
    }

    role.value = JSON.parse(localStorage.getItem("user"));
    accoun_no.value = JSON.parse(localStorage.getItem("User_id"));


    const getNotifications = () => {
      if(notify.value === true){
        $http.get(
          `/notification/push/user?userId=${accoun_no.value.UserSub}&all=true`
        )
        .then((response) => {
          let count = 0;
          allnotifications.value = response.data.data;
          for (let key of allnotifications.value) {
            if (key.isRead == false) {
              count = count + 1;
            }
          }
          if (count > 0) {
            showBlink.value = true;
          } else {
            showBlink.value = false;
          }
          notifications.value = response.data.data.slice(0, 5);
        })
        .catch((error) => {
          console.log("notification error:", error);
        });
      }
    }
    
    function startNotifTimer() {
      if (role?.value?.role == "member" || role?.value?.role == "employee" || role?.value?.role == "Acc-admin" && notify?.value == true) {
        setNotifier.value = setInterval(() => {
          if(localStorage.getItem('User_id')){
            getNotifications();
          }
        }, 5000);
      }
    }

    watch(notify, async (newNotif, oldNotif) => {
        if(notify.value == false) {
          clearInterval(setNotifier.value);
        } else {
          clearInterval(setNotifier.value)
          startNotifTimer()
        }
    },{immediate: true})

    const unreadnotifications = computed(() => notifications.value.filter((x) => !x.isRead))

</script>
<style scoped>
.notification {
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 0 !important;
}
.vlist {
  padding: 0 !important;
}

.notifis-list{
  overflow-y: hidden !important;
}

.notification-value{
  padding: 0 !important;
  margin: 0 !important;
}

.notification-container{
  display: flex !important;
  padding: 0.5rem!important;
}

.alarm-container{
  position: relative;
}

.blink_me {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  background: #8bee51;
  right: 0;
  top: -8px;
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
