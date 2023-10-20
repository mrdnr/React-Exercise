import React, { useState } from "react";

function Welcome( {name} ) {
  return <h3>Welcome, {name}</h3>;
}

function InteractiveWelcome({ value, onChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <Welcome name={value} />
    </div>
  );
}

export default InteractiveWelcome;
