import searchReducer from './../features/searchSlice';
import countryReducer from './../features/countrySlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    country: countryReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
