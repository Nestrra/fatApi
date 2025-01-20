

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsResponse } from '../../interfaces/appInterfaces';


interface productState {
  products: ProductsResponse[] | null;
  categories:[] | null

}



const initialState: productState = {

  products: JSON.parse(localStorage.getItem('products')!) ||null,
  categories: null
}

export const productsSlice = createSlice({
  name: 'products',
 
  initialState,
  reducers: {

    categoriesList:  (state, action: PayloadAction<[]>) => {
      state.categories = action.payload
   },

    productsList: (state, action: PayloadAction<ProductsResponse[]>) => {
       state.products = action.payload
    },

  },
})

export const { productsList,categoriesList  } = productsSlice.actions

