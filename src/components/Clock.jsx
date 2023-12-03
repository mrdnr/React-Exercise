import { useState, useEffect } from "react";

function Clock() {
    const [time, setDate] = useState(new Date());
  
    useEffect(() => {
      setInterval(() => {
        setDate(new Date());
      }, 1000);
    }, [time]);
  
    return <h2>{time.toLocaleString()}</h2>;
  }

  export default Clock;