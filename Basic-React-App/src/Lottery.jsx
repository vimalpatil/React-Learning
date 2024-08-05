import { useState } from 'react'
import { generateTicket, sum } from './helper';
import Ticket from './Ticket';
import Button from './Button';
export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(generateTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratultions,you won"}</h3>
        </div>
    )
}