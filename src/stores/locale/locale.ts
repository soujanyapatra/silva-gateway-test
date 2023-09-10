import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale',() =>{
  // state: () => ({
  //   appLanguage: 'en'
  // }),
  // getters: {
  //   appLanguage: state => state.appLanguage,
  // },
  // actions: {
  //   setLocale(value:any) {
  //     this.appLanguage = value
  //   }
  // }
 const list = reactive([])
const appLanguage = ref('en')

  const newLocale =(locale:any )=>{
    console.log('locale: ', locale);
    list.value = locale
}


return {
  list,
  appLanguage,
  newLocale
}

});
