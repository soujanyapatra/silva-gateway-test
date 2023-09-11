<template>
  <section>
    <VRow
      class="flex w-full bg-img vx-row no-gutter items-center justify-center login-parent"
    >
      <VCard width="500">
        <VCardText>
          <div class="font-weight-x-larger" style="margin-bottom: 50px">
            pay from
          </div>
          <div
            id="buttons-for-merchant"
            :payment-info="`apikey=${route.query.apiKey}&merchantId=${route.query.merchantId}&referenceNo=${route.query.referenceNo}&environment=live&amount=${route.query.amount/10}&redirectURL=${route.query.redirectURL}`"
          ></div>
          <VCol>
            <VBtn variant="flat" class="mt-5 mb-2 disable" size="large"> stripe </VBtn>
          </VCol>
          <VCol>
            <VBtn variant="flat" class="mt-2 mb-2 disable" size="large"> Credit card </VBtn>
          </VCol>
          <VCol>
            <VBtn variant="flat" class="mt-2 mb-15 disable" size="large"> Debit card </VBtn>
          </VCol>
        </VCardText>
      </VCard>
    </VRow>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
onMounted(async () => {
  console.log(route.query);
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://res.cloudinary.com/drasjazfx/raw/upload/v1692976234/wycfqymdeaowres16y1r.js"
  );
  document.head.appendChild(script);
});
</script>
<style scoped>
.disable{
  cursor: not-allowed;
}
</style>