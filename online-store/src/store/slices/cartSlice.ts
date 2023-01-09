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
    addProduct(state: CartStateItem[], action: {payload : CartStateItem, type : string} ){
      const tea = state.find((el) => el.tea.id === action.payload.tea.id);
      if(!tea){
        state.push(action.payload);
      } else {
        const index : number = state.indexOf(tea);
        if(state[index].count !== state[index].tea.stock){
          state[index].count = state[index].count + 1; 
        }
      }
      localStorage.setItem('cartProducts', JSON.stringify(state));
    },
    deleteProduct(state : CartStateItem[], action: {payload : CartStateItem, type : string}) {
      const tea: CartStateItem | undefined = state.find((el) => el.tea.id === action.payload.tea.id);
      let index : number;
      if(tea) {
        index = state.indexOf(tea);
        state[index].count = state[index].count - 1;
        if(!state[index].count){
          state.splice(index,1);
        }  
      }
      localStorage.setItem('cartProducts', JSON.stringify(state));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer