import { configureStore } from '@reduxjs/toolkit'
import teaReducer from './slices/teaSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    teas: teaReducer,
    filter: filterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch