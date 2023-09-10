<template>
  <section>
    <VCard>
      <VCardText class="text-content">
        Products
      </VCardText>
      <VRow>
        <VCol cols="4">
          <VImg src="../../src/assets/images/earpod.jpg" alt="" height="150" width="150">
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
          <VBtn class="float-right" @click="goToPayment(38)">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="4">
          <VImg src="../../src/assets/images/mobile.webp" alt="" height="150" width="150">
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
          <VBtn class="float-right" @click="goToPayment(680)">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="4">
          <VImg src="../../src/assets/images/watch.jpg" alt="" height="150" width="150">
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">Chronograph Black Dial Men's Watch-BQ2364</span>
              <span class="text-content">$ 50.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(50)">
            Buy
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="4">
          <VImg src="../../src/assets/images/refrigarator.webp" alt="" height="150" width="150">
          </VImg>
        </VCol>
        <VCol cols="4" class="mt-15">
          <div class="d-flex align-centre">
            <div class="d-flex flex-column">
              <span class="text-content">Samsung 236 L 2 Star Digital Double Door Refrigerator.</span>
              <span class="text-content">$ 200.00</span>
            </div>
          </div>
        </VCol>
        <VCol cols="3" class="mt-15 ml-5">
          <VBtn class="float-right" @click="goToPayment(200)">
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
    const router = useRouter()
    const liveKey = ref('24324iurewrerewr-dfdsf')
    const merchantId = ref('34324324234')
    const referenceNo = ref('432324')
    const environment = ref('live')
    const redirectURL = ref('https://silvatree.co')

    function goToPayment(param: any){
      let routerQuery = `apikey=${liveKey.value}&merchantId=${merchantId.value}&referenceNo=${referenceNo.value}&environment=${environment.value}&amount=${param}&redirectURL=${redirectURL.value}`
      router.push({
        name: 'payment',
        query: routerQuery
      });
    }
    // -------------- life cycle hooks ---------------
    onMounted(async () => { });

    // -------------- Those are using by template --------------
    return {
      router,
      goToPayment
    };
  },
});
</script>
