<script lang="ts" setup>
import type { CustomInputContent, GridColumn  } from '@core/types'
import { computed } from 'vue'
import { layout } from "@/stores/layout";

interface Props {
  selectedRadio: string
  radioContent: CustomInputContent[]
  gridColumn?: GridColumn
}


const data = layout()

interface Emit {
  (e: 'update:selectedRadio', value: string): void
}

const props = defineProps<Props>()


const emit = defineEmits<Emit>()
  const selectedOption = ref("")
  setTimeout(()=>{
    selectedOption.value = (props.selectedRadio)
  },200)




watch(selectedOption, () => {
  
  emit('update:selectedRadio', selectedOption.value)
})


// const fullName = computed(() => {
//       return props.selectedRadio;
//     });

</script>

<template>
  <VRadioGroup
  
    v-model="data.selectedRadio"
  >
    <VRow>
      <VCol
        v-for="item in props.radioContent"
        :key="item.id"
        class=""
        v-bind="gridColumn"
        cols="12"  md="4"
      >
 

       <div class="p-0 m-0">
        <VLabel
        class="custom-input custom-radio rounded cursor-pointer position-relative creditcarddata creditcard"
        :class="data.selectedRadio == item.id  ? 'active' : ''"
       
      >
      
        <div>
          <VRadio :value="item.id"  class="radioofcard"/>
        </div>
        <slot :item="item">
          <div class="flex-grow-1 ">
            <div class=" align-center mb-1 ml-2">
              <h6 class="cr-title text-base text-white mt-2" :class="item.name?'':'invisible'">
                {{ item.name}}
              </h6>
             
              <div
                v-if="item.last4"
                class="text-disabled text-base text-white mt-3"
              >XXXX XXXX XXXX {{ item.last4 }}</div>
            </div>
           <div >
            <img
            v-if="item.brand == 'MasterCard'"
            src="../../../assets/images/admin/mastercard-logo.png"
            alt
            class="credit-card "
          />
          <img
            v-if="item.brand == 'Visa'"
            src="../../../assets/images/admin/visa-logo.png"
            alt
            class="credit-card"
          />
          <img
            v-if="item.brand == 'Discover'"
            src="../../../assets/images/admin/Discover.png"
            alt
            class="credit-card"
          />
          <img
            v-if="item.brand == 'JCB'"
            src="../../../assets/images/admin/JCB.png"
            alt
            class="credit-card"
          />
          <img
            v-if="item.brand == 'American Express'"
            src="../../../assets/images/admin/american.png"
            alt
            class="credit-card"
          />
          <img
            v-if="item.brand == 'Diners Club'"
            src="../../../assets/images/admin/dc.png"
            alt
            class="credit-card"
          />
           </div>
          </div>
        </slot>
      </VLabel>
       </div>
      </VCol>
    </VRow>
  </VRadioGroup>
</template>

<style >
.custom-radio {
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
}

  .custom-radio .v-radio {
    margin-block-start: -0.25rem;
  }

  .custom-radio .cr-title {
    font-weight: 500;
  }

.credit-card{
  width: 50px;
  position: absolute;
  right: 20px;
  bottom: 20px;

}
.creditcarddata{
  background-color: #28303d !important;
  color: white!important;
  height: 120px;
}
.v-radio .v-selection-control__input .iconify--custom{
  /* border: 1px solid white !important; */
}
.radioofcard input[type='radio']{
   
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: none;
    border: 3px solid white !important;
}
.invisible {
  visibility: hidden !important;
  height: 21px;
}

</style>
