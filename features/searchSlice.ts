import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  input: string
}

const initialState: SearchState = {
  input: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = searchSlice.actions

export default searchSlice.reducer
