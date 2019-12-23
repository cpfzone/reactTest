import React, { useState, useEffect, useContext, createContext } from 'react';

const CountContext = createContext()

function Example(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`you clicked ${count} times`)
      
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>

        </div>
    )
}

function Counter(){
    const count1 = useContext(CountContext);
    return (<h2>{count1}</h2>)
}

export default Example;