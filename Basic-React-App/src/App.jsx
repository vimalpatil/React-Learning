import { useState } from 'react'
import ProductTab from "./productTab.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductTab />
    </>
  )
}

export default App
