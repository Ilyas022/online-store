// import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { Tea } from "../../types"

// interface TeasState {
//   teas: Tea[]
// }

// const initialState: TeasState = {
//   teas: [],
// }

// export const teaSlice = createSlice({
//   name: 'teas',
//   initialState,
//   reducers: {
//     addTea: (state, action: PayloadAction<Tea>) => {
//       state.teas.push({
//         id: action.payload.id,
//         title: action.payload.title,
//         description: action.payload.description,
//         type: action.payload.type,
//         image: action.payload.image,
//         price: action.payload.price,
//         rating: action.payload.description

//       });
//     },
//     removeTea: (state, action: PayloadAction<Tea>) => {
//       state.teas = state.teas.filter(tea => tea.id !== action.payload.id);
//     }
//   }
// })

// export default teaSlice.reducer;
// export const { addTea, removeTea } = teaSlice.actions