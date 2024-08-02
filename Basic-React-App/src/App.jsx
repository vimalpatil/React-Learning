import { useState } from 'react'
import ProductTab from "./productTab.jsx";

import './App.css'
import Button from './Button.jsx';
import Form from './form.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <h2>BlockBluster Deals | Shop Now</h2>
      <ProductTab />
    </>
  )
}

export default App
