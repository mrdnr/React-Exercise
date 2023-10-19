import React from "react";

function AlertClock() {
  const getCurrentTime = () => {
    const currentTime = new Date();
    alert("Time : " + currentTime.toLocaleTimeString());
  };

  return (
    <div>
      <button onClick={getCurrentTime}>Show Current Time</button>
    </div>
  );
}

export default AlertClock;
