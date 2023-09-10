import { defineStore } from 'pinia'

export const layout = defineStore('layout', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      /**
       * for full-screen-loading overlay
       */
      fullScreenLoad: false,
    }
  },
})

// export default layout