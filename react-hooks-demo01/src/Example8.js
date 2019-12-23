import React, { useRef, useState, useEffect } from 'react';

function Example8(){
    const inputEl = useRef(null)
    const clickFun =()=>{
        inputEl.current.value= ' cpf'
    }
    const [text, setText] = useState('cpfzone')
    useEffect(()=>{
        inputEl.current =text;
        console.log('inputEl.current', inputEl.current)
    },[text])
    return (
      <>
        <input ref={inputEl} type='text'  />
        <button onClick={clickFun}>按钮</button>
        <br/>
        <br/>
        <input value={text}  onChange={(e)=>{setText(e.target.value)}}/>
      </>
    )
}



export default Example8; 