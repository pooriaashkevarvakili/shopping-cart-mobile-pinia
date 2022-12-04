import {
  ref,
  computed
} from 'vue'
import {
  defineStore
} from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      product: [{
          id: 1,
          name: 'سامسونگ مدل گلکسی A32',
          price: '300',
          img: 'https://dkstatics-public.digikala.com/digikala-products/f7695f5537bd17fe62ff59b92cf3574ecfaece4b_1656422164.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
        },
        {
          id: 2,
          name: 'سامسونگ مدل گلکسی A73',
          price: '400',
          img: 'https://dkstatics-public.digikala.com/digikala-products/1b95a4ca2d5643f2b03f3721adef4cede444d3c5_1656406812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
        },
        {
          id: 3,
          price: '500',
          name: 'شیائومی مدل ردمی',
          img: 'https://dkstatics-public.digikala.com/digikala-products/65a18fae71e12f70f519a7fdc474adbde5f4e895_1656428616.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
        },
        {
          id: 4,
          price: '600',
          name: 'سامسونگ مدل گاکسی A13',
          img: 'https://dkstatics-public.digikala.com/digikala-products/06aaa82b2af4b71992683701769b0afa4fa169bf_1666160815.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'
        }
      ],

    }

  },
  getters: {
    allProducts(state) {
      return state.product
    }
  },
  actions: {

  }


})