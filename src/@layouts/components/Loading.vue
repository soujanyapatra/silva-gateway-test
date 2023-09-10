<template>
    <div
      class="overlay fill-height flex-grow-1 d-flex align-center justify-center"
      :style="`background-color: rgba(0, 0, 0, ${opacity});`"
      v-if="loading"
    >
      <v-progress-circular
        :size="50"
        :color="color"
        indeterminate
      ></v-progress-circular>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { layout } from "../../stores/layout";
  export default defineComponent({
    name: "Loading",
    setup() {
      const opacity = ref("0.6");
      const color = ref("#82e0dd");
      const layoutScreen = layout();
  
      const loading = computed(() => {
        return layoutScreen.fullScreenLoad;
      });
      return {
        opacity,
        color,
        loading,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .v-progress-circular {
    margin: 1rem;
  }
  
  .overlay {
    z-index: 9999999 !important;
    width: 100%;
    position: absolute;
  }
  </style>
  