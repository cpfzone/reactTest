import React, { useState, useEffect, useCallback } from 'react';


function useSize(){
    const [size, setSize] = useState({
        height:document.documentElement.clientHeight,
        width:document.documentElement.clientWidth,
    })
    const changeSize = useCallback(()=>{
        setSize({
            height:document.documentElement.clientHeight,
            width:document.documentElement.clientWidth,   
        })
    },[])
    useEffect(()=>{
        window.addEventListener('resize',changeSize)
        return ()=>{
            window.removeEventListener('resize',changeSize)
        }
    },[])
    return size
}

function Example9(){
    const size =useSize()
    return (
        <>
            <div>size为：{size.width}*{size.height}</div>
        </>
    )
}

export default Example9;