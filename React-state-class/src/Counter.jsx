import { useState } from "react"

function init() {
    console.log("Init was executed");
    return Math.random();
}
export default function Counter() {
    let [count, setcount] = useState(init); //initailization
    console.log("componenet was re-ndered");
    let incCount = () => {
        setcount((currCount) => {
            return currCount + 1;
        });
        // setcount((currCount) => {
        //     return currCount + 1;
        // });

        // setcount(25);

    }
    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}