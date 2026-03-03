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
    }
});

// Export actions
export const { Increment, Decrement } = reactSlicer.actions;

// Export reducer
export default reactSlicer.reducer;