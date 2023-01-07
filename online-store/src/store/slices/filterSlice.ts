import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  type: string[],
  leaf: string[]
}

const initialState: FilterState = {
  type: [],
  leaf: []
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFilterType, removeFilterType, setFilterLeafType, removeFilterLeafType } = filterSlice.actions

export default filterSlice.reducer