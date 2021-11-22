import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  regionFilter: string
}

const initialState: FilterState = {
  regionFilter: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.regionFilter = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { filter } = filterSlice.actions

export default filterSlice.reducer
