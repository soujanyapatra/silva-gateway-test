<template>
  <section>
    <VCard>
      <VCardText class="font-weight-x-larger d-flex mt-10 mb-10"> Products </VCardText>
      <VRow>
        <VCol cols="4">
          <VImg
            src="../../src/assets/images/earpod.jpg"
            alt=""
            height="150"
            width="150"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">Apple AirPods (2nd Generation) </span>
              <span class="text-content">$ 38.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(38, 'airPod')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="../../src/assets/images/mobile.webp"
            alt=""
            height="150"
            width="150"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">I phone 14</span>
              <span class="text-content">$ 680.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(680, 'phone')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="../../src/assets/images/watch.jpg"
            alt=""
            height="150"
            width="150"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content"
                >Chronograph Black Dial Men's Watch-BQ2364</span
              >
              <span class="text-content">$ 50.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(50, 'watch')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="../../src/assets/images/refrigarator.webp"
            alt=""
            height="150"
            width="150"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content"
                >Samsung 236 L 2 Star Digital Double Door Refrigerator.</span
              >
              <span class="text-content">$ 200.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(200, 'refrigerator')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    // ------------ Variables ------------------
    const router = useRouter();
    const liveKey = ref();
    const merchantId = ref();
    const referenceNo = ref();
    const environment = ref("live");
    const redirectURL = ref("https://silvatree.co");

    function goToPayment(param: any, productName: any) {
      if (productName === "airPod") {
        liveKey.value = "sl_live_U2eW2cLvdhLpq8E4SF6EmwhXZ3YIyeNtcL6R97diGgFYCzosSg3qPZVvNERIa23GI3hVBIt8PxznjvysIE9qKZ4l9Zt6MIfhjaeyQTKJ5zhvG5CSFUC6oIUzM0COhZeHZg3Kmvv0qCctpFuHNQj8E1UxBLbGxeC6szKc";
        referenceNo.value = "524727160000";
        merchantId.value = "70941";
      } else if (productName === "phone") {
        liveKey.value = "sl_live_U2eW2cLvdhLpq8E4SF6EmwhXZ3YIyeNtcL6R97diGgFYCzosSg3qPZVvNERIa23GI3hVBIt8PxznjvysIE9qKZ4l9Zt6MIfhjaeyQTKJ5zhvG5CSFUC6oIUzM0COhZeHZg3Kmvv0qCctpFuHNQj8E1UxBLbGxeC6szKc";
        referenceNo.value = "524727160000";
        merchantId.value = "70941";
      } else if (productName === "watch") {
        liveKey.value = "sl_live_U2eW2cLvdhLpq8E4SF6EmwhXZ3YIyeNtcL6R97diGgFYCzosSg3qPZVvNERIa23GI3hVBIt8PxznjvysIE9qKZ4l9Zt6MIfhjaeyQTKJ5zhvG5CSFUC6oIUzM0COhZeHZg3Kmvv0qCctpFuHNQj8E1UxBLbGxeC6szKc";
        referenceNo.value = "524727160000";
        merchantId.value = "70941";
      } else if (productName === "refrigerator") {
        liveKey.value = "sl_live_U2eW2cLvdhLpq8E4SF6EmwhXZ3YIyeNtcL6R97diGgFYCzosSg3qPZVvNERIa23GI3hVBIt8PxznjvysIE9qKZ4l9Zt6MIfhjaeyQTKJ5zhvG5CSFUC6oIUzM0COhZeHZg3Kmvv0qCctpFuHNQj8E1UxBLbGxeC6szKc";
        referenceNo.value = "524727160000";
        merchantId.value = "70941";
      }
      router.push({
        name: "payment",
        query: {
          apiKey: liveKey.value,
          merchantId: merchantId.value,
          referenceNo: referenceNo.value,
          environment: environment.value,
          redirectURL: redirectURL.value,
          amount: param,
        },
      });
    }
    // -------------- life cycle hooks ---------------
    onMounted(async () => {});

    // -------------- Those are using by template --------------
    return {
      router,
      goToPayment,
    };
  },
});
</script>
