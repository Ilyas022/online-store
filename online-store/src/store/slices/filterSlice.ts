import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  type: string[],
  leaf: string[],
  minPrice: number,
  maxPrice: number,
  minStock: number,
  maxStock: number,
  sortBy: string,
  sortType: string,
  sortValue: string
}

const initialState: FilterState = {
  type: [],
  leaf: [],
  minPrice: 1,
  maxPrice: 50,
  minStock: 1,
  maxStock: 145,
  sortBy: '',
  sortType: '',
  sortValue: 'sort-title'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    resetFilters(state) {
      state.leaf = []
      state.type = []
      state.minPrice = 1
      state.maxPrice = 50
      state.minStock = 1
      state.maxStock = 145
      state.sortBy = ''
      state.sortType = ''
      state.sortValue = 'sort-title'
    },
    setFilterType(state, action) {
      state.type.push(action.payload);
    },
    removeFilterType(state, action) {
      state.type = state.type.filter(type => type !== action.payload)
    },
    setFilterLeafType(state, action) {
      state.leaf.push(action.payload)
    },
    removeFilterLeafType(state, action) {
      state.leaf = state.leaf.filter(item => item !== action.payload)
    },
    setMinPrice(state, action) {
      if(action.payload < state.maxPrice) state.minPrice = action.payload
    },
    setMaxPrice(state, action) {
      if(action.payload > state.minPrice) state.maxPrice = action.payload
    },
    setMinStock(state, action) {
      if(action.payload < state.maxStock) state.minStock = action.payload
    },
    setMaxStock(state, action) {
      if(action.payload > state.minStock) state.maxStock = action.payload
    },
    setSortType(state, action) {
      state.sortType = action.payload
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setSortValue(state, action) {
      state.sortValue = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFilterType, removeFilterType, setFilterLeafType, removeFilterLeafType, setMinPrice, setMaxPrice, setMinStock, setMaxStock, resetFilters, setSortType, setSortBy, setSortValue } = filterSlice.actions

export default filterSlice.reducer