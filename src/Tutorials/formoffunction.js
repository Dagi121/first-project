import React, {useState} from 'react'

function Formfunction() {
    const [username, comment] = useState("");

    const usernamehandeler = (e) =>{
        comment(e.target.value)
    }
  return (
    <div>
        <form>
            <label>username</label>
            <input type='text' value={username} onChange={usernamehandeler}/>
        </form>
    </div>
  )
}
export default Formfunction;
// import React, { useState } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default MyComponent;
