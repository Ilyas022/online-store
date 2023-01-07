import { createSlice } from '@reduxjs/toolkit'
import { Tea } from '../../types';

export interface CartStateItem {
  tea : Tea,
  count : number
}

const initialState: CartStateItem[] = JSON.parse(localStorage.getItem('cartProducts') as string) ?  JSON.parse(localStorage.getItem('cartProducts') as string) : [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const tea = state.find((el) => el.tea.id === action.payload.tea.id);
      if(!tea){
        state.push(action.payload);
      } else {
        const index = state.indexOf(tea);
        state[index].count = state[index].count + 1; 
      }
      localStorage.setItem('cartProducts', JSON.stringify(state));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions

export default cartSlice.reducer