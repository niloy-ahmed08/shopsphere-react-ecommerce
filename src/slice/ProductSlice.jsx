import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
  ProductReducer : (state,action)=>{
          state.value = action.payload
  },
  CasualProductrducer : (state,action)=>{
           state.value = action.payload
  },
  GymProducts : (state,action)=>{
            state.value = action.payload
  }
    },
  
  
})

export const {ProductReducer,CasualProductrducer,GymProducts} = ProductSlice.actions

export default ProductSlice.reducer