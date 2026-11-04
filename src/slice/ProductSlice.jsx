import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cart : localStorage.getItem('cartkey') ? JSON.parse(localStorage.getItem('cartkey')): []
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
  },
    cartReducer : (state,action)=>{
            state.cart = [...state.cart , action.payload] 
            localStorage.setItem('cartkey',JSON.stringify(state.cart))
  }
    },
    
  
  
})

export const {ProductReducer,CasualProductrducer,GymProducts,cartReducer} = ProductSlice.actions

export default ProductSlice.reducer