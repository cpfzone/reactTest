import React, {useContext} from 'react';
import {ColorContext} from './Color';
const ShowAre = function(){
    const {color} = useContext(ColorContext)
    return (
    <div style={{color}}>字体颜色是{color}</div>
    )
}

export default ShowAre;