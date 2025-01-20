

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../interfaces/appInterfaces';


interface LoginState {
  loading: boolean;
  allUser: User[] | null;
  user: User | null;
}



const initialState: LoginState = {
  loading:false,
  allUser:  null,
  user: JSON.parse(localStorage.getItem('user')!) ||null
}

export const authSlice = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    start: (state) =>{

      state.loading = true
    },

    allUsers: (state, action: PayloadAction<User[]>) => {

      state.allUser = action.payload,
      state.loading=false

    },

    login: (state, action: PayloadAction<User>) => {

      state.user = action.payload
      state.loading=false
    },
    logout: (state) => {
    
        state.user = null
        state.loading=false
        localStorage.clear();
    }
  },
})

export const {start, login, logout, allUsers } = authSlice.actions

