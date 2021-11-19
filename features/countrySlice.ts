import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Country } from '../components/Countries';

export interface CountryState {
  countries: Country[]
}

const initialState: CountryState = {
  countries: []
}

export const searchSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    initCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { initCountries } = searchSlice.actions

export default searchSlice.reducer
