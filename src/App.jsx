import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import stores from "./Stores"
import Counting from './Counting'
import Custom_Counter from './Custom_Counter'
function App() {
  const [count, setCount] = useState(0)
  // console.log(stores)
  // console.log(reactSlicer)
  return (
    <>
    <Provider store={stores}>
      <Counting/>
      <br/><br/>
      <br/>
      <Custom_Counter/>
    </Provider>
    </>
  )
}

export default App
