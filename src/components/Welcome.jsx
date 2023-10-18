import Age from "./Age";
import React from "react";

function Welcome( {name, age = 64} ) {
  return (
    <div>
      <p>Welcome {name}!</p>
      {age>18 && age < 65 && <Age age={age}/>}
      
    </div>
  );
  
}

export default Welcome;
