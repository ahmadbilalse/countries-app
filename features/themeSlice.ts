import { createSlice } from '@reduxjs/toolkit'

let savedTheme: string | null = null;
if (typeof window !== 'undefined') {
  savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || !savedTheme) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
}

export interface ThemeState {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: (savedTheme === 'dark' || !savedTheme) ? true : false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDark = !state.isDark;
      const newTheme = state.isDark ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
        if (state.isDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer
