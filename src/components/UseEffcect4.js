// Use effect cleanup Works similar as UseEffectwith CleanUp

import React, { useState } from "react";
import UseEffect3 from "./UseEffect3";

function UseEffcect4() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}> Toggle Display</button>
      {display && <UseEffect3/>}
    </div>
  );
}

export default UseEffcect4;
