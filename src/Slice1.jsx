import {createSlice} from "@reactjs/toolkit"
const reactSlicer=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducer:{
        Increment:(state)=>{state.count+=1},
        Decrement:(state)=>{state.count-=1},
    }
})
export default reactSlicer.reducer;