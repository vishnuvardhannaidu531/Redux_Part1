import { useState } from "react";
import { useDispatch } from "react-redux";
import { Custom_Increase } from "./Slice1";

function Custom_Counter(){
    const [number,setNumber]=useState(0);
    const dispatch=useDispatch();
    function handleChange(){
        dispatch(Custom_Increase(Number(number)));
        setNumber(0)
    }
    return(
        <>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={handleChange}>Submit</button>
        </>
    )
}
export default Custom_Counter;