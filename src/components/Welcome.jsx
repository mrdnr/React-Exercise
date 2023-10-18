import Age from "./Age";
import React from "react";

function Welcome( {name, age = 17} ) {
  return (
    <div>
      <p>Welcome {name}!</p>
      {age && <Age age={age}/>}
      
    </div>
  );
  
}

export default Welcome;
