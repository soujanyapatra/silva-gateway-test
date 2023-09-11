<template>
  <section>
    <VRow
      class="flex w-full bg-img vx-row no-gutter items-center justify-center login-parent"
    >
      <VCard width="500">
        <VCardText>
          <div class="font-weight-x-larger" style="margin-bottom: 50px">
            pay with
          </div>
          <div
            id="buttons-for-merchant"
            :payment-info="`apikey=${route.query.apiKey}&merchantId=${route.query.merchantId}&referenceNo=${route.query.referenceNo}&environment=live&amount=${route.query.amount}&redirectURL=${route.query.redirectURL}`"
          ></div>
          <VBtn variant="flat" class="mt-10 mb-15" size="large"> stripe </VBtn>
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
