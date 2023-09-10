<template>
  <section>
    <VCard>
      <VCardText>
        <div
          class="d-flex justify-content-start"
          style="margin-bottom: 100px"
        >
          <div
            class="rounded-full graph-icons text-center"
            :class="[`text-${color}`, { 'mb-4': !iconRight }]"
            :style="{ background: `${background}` }"
          >
            <img :src="imageSrc" class="static-img inline-flex" alt=""/>
          </div>
          <div class="pl-3 mt-2">
            <h2 class="mb-5 font-bold statistics">
              <img
                class="silva-currency-icon"
                width="15"
                src="../../assets/images/black-dollar.png"
                alt=""
              />
              <span
                v-if="props.statistic && props.statistic.length <= 5"
                class="pl-3"
                style="color: #2c2c2c;"
                >{{ props.statistic  }}</span
              >

                <span v-else
                  class="pl-3"
                  style="color: #2c2c2c;"
                  >{{ String(props.statistic).substring(0,5) }}...</span
                >
            </h2>
            <span style="line-height: normal;">{{ props.statisticTitle }}</span>
          </div>
        </div>
      </VCardText>
    </VCard>
  </section>
</template>

<script setup lang="ts">
import { addZeroes } from '@/utils/filters';

const props = defineProps({
  imageName: {
    type: String,
    required: true,
  },
  statistic: {
    type: [Number, String],
    required: true,
  },
  statisticTitle: {
    type: String,
  },
  color: {
    type: String,
    default: "primary",
  },
  background: {
    type: String,
    default: "primary",
  },
  colorTo: {
    type: String,
  },
  type: {
    type: String,
    default: "line",
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
  hideChart: {
    type: Boolean,
    default: false,
  },
});

const imageSrc = computed(() =>{
  return new URL(`../../assets/images/${props.imageName}`, import.meta.url).href;
})
</script>

<style scoped>

.rounded-full {
  border-radius: 9999px;
}
</style>