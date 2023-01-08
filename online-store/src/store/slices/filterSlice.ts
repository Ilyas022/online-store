import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  type: string[],
  leaf: string[],
  minPrice: number,
  maxPrice: number,
  minStock: number,
  maxStock: number
}

const initialState: FilterState = {
  type: [],
  leaf: [],
  minPrice: 1,
  maxPrice: 50,
  minStock: 1,
  maxStock: 145
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterType(state, action) {
      state.type.push(action.payload);
    },
    removeFilterType(state, action) {
      state.type = state.type.filter(type => type !== action.payload)
    },
    setFilterLeafType(state, action) {
      console.log(action)
      state.leaf.push(action.payload)
    },
    removeFilterLeafType(state, action) {
      console.log(action);
      state.leaf = state.leaf.filter(item => item !== action.payload)
    },
    setMinPrice(state, action) {
      console.log('pr', state.minPrice, state.maxPrice)
      console.log(action.payload)
      if(action.payload > state.maxPrice) {
        // const temp = state.maxPrice
        state.maxPrice = action.payload
        // state.minPrice = temp
      } 
      if(action.payload < state.maxPrice) {
        state.minPrice = action.payload
      }
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload
    },
    setMinStock(state, action) {
      state.minStock = action.payload
    },
    setMaxStock(state, action) {
      state.maxStock = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFilterType, removeFilterType, setFilterLeafType, removeFilterLeafType, setMinPrice, setMaxPrice, setMinStock, setMaxStock } = filterSlice.actions

export default filterSlice.reducer