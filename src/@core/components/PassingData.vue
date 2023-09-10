<script setup lang="ts">
// import { useRoute } from "vue-router";
import { defineProps } from "vue";
// const router = useRoute();
const props = defineProps(["user"]);

onMounted(() => {
  console.log(props); // { path:"/passingdata", query:{name:'
});
</script>
<template>Helloooo Passing Data</template>
<route lang="yaml">
meta:
  layout: blank
</route>
