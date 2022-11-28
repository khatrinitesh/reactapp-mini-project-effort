import { configureStore } from "@reduxjs/toolkit";

import DarkModeSlice from './darkModeSlice';

export const store = configureStore({
    reducer:{
        darkMode:DarkModeSlice
    }
})