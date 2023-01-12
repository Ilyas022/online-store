import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowed : false
}

type PaymentStateType = {
  isShowed : boolean
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPayment(state: PaymentStateType, action: {payload : boolean, type : string} ){
      state.isShowed = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPayment } = paymentSlice.actions

export default paymentSlice.reducer