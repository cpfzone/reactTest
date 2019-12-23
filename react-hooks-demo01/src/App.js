import React, { useState, useEffect } from 'react';

function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(`useEffect => you clicked ${count} times`)
  })

  return(
   <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}}>Chlick me</button>
    </div>
  )
}

export default App;