

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsResponse } from '../../interfaces/appInterfaces';


interface productState {
  products: ProductsResponse[] | null;

}



const initialState: productState = {

  products: JSON.parse(localStorage.getItem('products')!) ||null,
  
}

export const productsSlice = createSlice({
  name: 'products',
 
  initialState,
  reducers: {

 
    productsList: (state, action: PayloadAction<ProductsResponse[]>) => {
       state.products = action.payload
    },

  },
})

export const { productsList, } = productsSlice.actions

