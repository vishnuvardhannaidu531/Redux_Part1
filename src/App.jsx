import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import stores from "./Stores"
import Counting from './Counting'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={stores}>
      <Counting/>
    </Provider>
    </>
  )
}

export default App
