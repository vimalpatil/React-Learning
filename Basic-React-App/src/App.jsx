import { useState } from 'react'
import ProductTab from "./productTab.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>BlockBluster Deals | Shop Now</h2>
      <ProductTab />
    </>
  )
}

export default App
