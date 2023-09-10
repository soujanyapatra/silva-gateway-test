<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function passData() {
  const data = { paramData: { name: "test", data1: ["hello", "vihang"] } };

  // router.push({ name: "passingdata", params: { name: { age: "10", data: "111111" } } });
  router.push({ name: "passingdata", params: "adada" });
}
</script>
<template>
  <div>
    <h1>data</h1>
    <VBtn @click="passData()">pass Data</VBtn>
  </div>
</template>
<route lang="yaml">
meta:
  layout: blank
</route>
