

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartUser } from '../../interfaces/appInterfaces';



interface cartState {
    carts: CartUser[] | null;

}



const initialState: cartState = {

  carts: null,
  
}

export const cartsSlice = createSlice({
  name: 'carts',
 
  initialState,
  reducers: {

 
    carts: (state, action: PayloadAction<CartUser[]>) => {
       state.carts = action.payload
    },

  },
})

export const { carts, } = cartsSlice.actions

