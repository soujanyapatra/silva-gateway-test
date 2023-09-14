<template>
  <section>
    <VCard>
      <VCardText class="font-weight-x-larger d-flex mt-10 mb-10"> Products </VCardText>
      <VRow>
        <VCol cols="4">
          <VImg
            src="https://rukminim2.flixcart.com/image/416/416/kpinwy80/headphone/x/r/e/mmef2hn-a-apple-original-imag3qe9hphsevrt.jpeg?q=70"
            alt=""
            height="120"
            width="120"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-12">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">Apple AirPods (2nd Generation) </span>
              <span class="text-content">$ 4.10</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-12 ml-5">
          <VBtn class="float-right" @click="goToPayment(4.10, 'airPod')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70"
            alt=""
            height="120"
            width="120"
            class="ml-3"
          >
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-12">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">I phone 14</span>
              <span class="text-content">$ 12.30</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-12 ml-5">
          <VBtn class="float-right" @click="goToPayment(12.30, 'phone')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/1/i/-original-imagnvwumakwug6c.jpeg?q=70"
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
              <span class="text-content">$ 5.01</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(5.01, 'watch')">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VDivider />
      <VRow>
        <VCol cols="4">
          <VImg
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/8/3/3/-original-imagmkergdzdvqhc.jpeg?q=70"
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
              <span class="text-content">$ 9.10</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(9.10, 'refrigerator')">
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
    const redirectURL = ref("https://staging.silvatree.co/test/");
    const duration = ref('')
    const recurringOn = ref('')

    function goToPayment(param: any, productName: any) {
      if (productName === "airPod") {
        liveKey.value = "sl_live_GbrxyAt1l6AoBDwTSXHfb63hZ4fDiq4yYYidz1bfsNHvz3wOlhsufxKC1E50mTouD0kZkN6hsALMKfQQWxDQJwoMxk6Ad9u3qw9k5JwyVQlh9KnGFTrKx3WEKtqqkYsWrt6AsaVtd2ZgVvY1HGNbj4oqJ8AtMGyypoiKi5JI";
        referenceNo.value = "961294960000";
        merchantId.value = "70532";
        duration.value = 'six-month'
        recurringOn.value = 'every-week'
      } else if (productName === "phone") {
        liveKey.value = "sl_live_GbrxyAt1l6AoBDwTSXHfb63hZ4fDiq4yYYidz1bfsNHvz3wOlhsufxKC1E50mTouD0kZkN6hsALMKfQQWxDQJwoMxk6Ad9u3qw9k5JwyVQlh9KnGFTrKx3WEKtqqkYsWrt6AsaVtd2ZgVvY1HGNbj4oqJ8AtMGyypoiKi5JI";
        referenceNo.value = "961294960000";
        merchantId.value = "70532";
        duration.value = 'six-month'
        recurringOn.value = 'every-week'
      } else if (productName === "watch") {
        liveKey.value = "sl_live_GbrxyAt1l6AoBDwTSXHfb63hZ4fDiq4yYYidz1bfsNHvz3wOlhsufxKC1E50mTouD0kZkN6hsALMKfQQWxDQJwoMxk6Ad9u3qw9k5JwyVQlh9KnGFTrKx3WEKtqqkYsWrt6AsaVtd2ZgVvY1HGNbj4oqJ8AtMGyypoiKi5JI";
        referenceNo.value = "961294960000";
        merchantId.value = "70532";
      } else if (productName === "refrigerator") {
        liveKey.value = "sl_live_GbrxyAt1l6AoBDwTSXHfb63hZ4fDiq4yYYidz1bfsNHvz3wOlhsufxKC1E50mTouD0kZkN6hsALMKfQQWxDQJwoMxk6Ad9u3qw9k5JwyVQlh9KnGFTrKx3WEKtqqkYsWrt6AsaVtd2ZgVvY1HGNbj4oqJ8AtMGyypoiKi5JI";
        referenceNo.value = "961294960000";
        merchantId.value = "70532";
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
          recurringOn: recurringOn.value,
          duration: duration.value
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
