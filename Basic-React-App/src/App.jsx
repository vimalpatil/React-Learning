
import ProductTab from "./productTab.jsx";

import './App.css'
import Lottery from './Lottery.jsx';
import { sum } from "./helper.js";

let winCondition = (ticket) => {
  return sum(ticket) === 15
  // return ticket.every((num) => num === ticket[0]);
  // return ticket[0] === 0;
}

function App() {


  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
      {/* <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[5, 6, 7, 7, 8]} /> */}
      {/* <Lottery /> */}
      {/* <h2>BlockBluster Deals | Shop Now</h2>
      <ProductTab /> */}
    </>
  )
}

export default App
