import React,{useReducer} from 'react';

function Example5(){
    const [count, dispatch] = useReducer((state, action)=>{
        switch (action) {
            case 'add':
                return {num:state.num+1}
                
            case 'sub':
                return {num:state.num-1}
                
            default:
                return state
        }
    },{num:0})
    return (
        <div>
            <h2>现在的分数是{count.num}</h2>
            <button onClick={()=>{dispatch('add')}}>加分</button>
            <button onClick={()=>{dispatch('sub')}}>减分</button>
        </div>
    )
}

export default Example5;
