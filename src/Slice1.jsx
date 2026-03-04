import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => {
            state.count += 1;
        },
        Decrement: (state) => {
            state.count -= 1;
        },
        Custom_Increase:(state,action)=>{state.count+=action.payload},
    }
});

// Export actions
export const { Increment, Decrement,Custom_Increase } = reactSlicer.actions;

// export {reactSlicer} 

// Export reducer
export default reactSlicer.reducer;