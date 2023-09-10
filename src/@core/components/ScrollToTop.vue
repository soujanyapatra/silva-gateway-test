<script setup lang="ts">
const { y } = useWindowScroll();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <VScaleTransition
    style="transform-origin: center"
    class="scroll-to-top d-print-none"
  >
    <VBtn
      style="border-radius: 4px; font-size: 3px"
      color="black"
      v-show="y > 200"
      icon
      density="comfortable"
      @click="scrollToTop"
    >
      <VIcon color="white" size="22" icon="tabler-arrow-up" />
    </VBtn>
  </VScaleTransition>
</template>

<style lang="scss">
.scroll-to-top {
  position: fixed !important;

  // To keep button on top of v-layout. E.g. Email app
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 25px;
}
</style>
