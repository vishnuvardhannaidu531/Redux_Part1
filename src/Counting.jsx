import {useDispatch, useSelector} from "react-redux"
function Counting(){
    const count=useSelector((state)=>state.slice1.count)
    //Now we have move the function  call from this react file to redux 
    //So that mean i have to import something react-redux
    const dispatch=useDispatch();
    return(
        <>
        <h1>Counter is :{count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        </>
    )
}
export default Counting;