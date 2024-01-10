import React, { useState } from 'react';

function Hook() {
    const [color, setColor] = useState(5+6)
  return (
    <div>
        <h1>my foverite color is {color}</h1>
        <button onClick={() => setColor("blue")}>blue</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
        <button onClick={() => setColor("green")}>green</button>
    </div>
  )
}

export default Hook