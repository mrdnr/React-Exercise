import React from "react";

function AlertClock({onClick}) {
  

  return (
    <div>
      <button onClick={onClick}>Show Current Time</button>
    </div>
  );
}

export default AlertClock;
