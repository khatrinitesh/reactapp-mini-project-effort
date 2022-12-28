import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:JSON.parse(localStorage.getItem("darkMode")) || false,
}

export const DarkModeSlice = createSlice({
    name:'darkMode',
    initialState,
    reducers:{
        toggleDarkMode: (state) => {
            state.mode = !state.mode;
            localStorage.setItem('darkMode',JSON.stringify(state.mode))
        }
    }
})


export const {toggleDarkMode} = DarkModeSlice.actions;
export default DarkModeSlice.reducers;