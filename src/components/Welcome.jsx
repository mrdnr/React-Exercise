import Age from "./Age";
import React from "react";

function Welcome( {name, age = 64} ) {

  const limit = age>18 && age < 65 && name === 'John';
  return (
    <div>
      <p>Welcome {name}!</p>
      {limit && <Age age={age}/>}
      
    </div>
  );
  
}

export default Welcome;
