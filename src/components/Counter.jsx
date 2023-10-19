import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    //An instantaneous value is enough because react updates piece by piece due to its structure. Each time the button is clicked, an update takes place.
    return ( 
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count +1)}>Counter</button>
        </div>
     );
}

export default Counter;