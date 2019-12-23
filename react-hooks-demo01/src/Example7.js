import React, {  useState,useMemo } from 'react';

function Example7(){
    const [xiaohong, setXiaohong ] = useState('小红在等着');
    const [zhiling, setZhiling] = useState('志玲在等待');
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling('志玲姐姐向我们走来'+new Date().getTime())}}>志玲</button>
            <ChildCom name={xiaohong}>{zhiling}</ChildCom>
        </>
    )
}
function ChildCom({name,children}){
    function changeXiaohong(name){
        console.log('小红走来了')
        return name+',小红向我们走来了'
    }
    
    return (

        <>
            <div>{useMemo(()=>changeXiaohong(name),[name])}</div>
            <div>{children}</div>
        </>
    )
}
export default Example7;