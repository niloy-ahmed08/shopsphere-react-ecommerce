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
           let exits = state.cart.find((item)=>item.id == action.payload.id)
           if (!exits) {
                  state.cart = [...state.cart , action.payload] 
            localStorage.setItem('cartkey',JSON.stringify(state.cart))
           }
      
  },
   RemoveReducer : (state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
            localStorage.setItem('cartkey',JSON.stringify(state.cart))
           },

        incrementReducer : (state,action)=>{
            state.cart = state.cart.map((item)=>{
             return action.payload == item.id ? {...item, quan : item.quan + 1} : item
            })
            localStorage.setItem('cartkey',JSON.stringify(state.cart))
           } ,
           
           decrementReducer : (state,action)=>{
            state.cart = state.cart.map((item)=>{
              return action.payload == item.id ? {...item , quan : item.quan > 1 ? item.quan - 1 : 1 } :item
            })
           }
      
    },
    
  
  
})

export const {ProductReducer,CasualProductrducer,GymProducts,cartReducer,RemoveReducer,incrementReducer,decrementReducer} = ProductSlice.actions

export default ProductSlice.reducer