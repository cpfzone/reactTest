import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.props.history.push('/home')
    }
    render() { 
        const list = [
            {
                cid:'01', 
                title:'列表页001'
            },
            {
                cid:'02', 
                title:'列表页002'
            },
            {
                cid:'03', 
                title:'列表页003'
            }
        ]
        return ( 
            <div>
                <h2>
                    Index-page
                </h2>
                <ul>
                    {list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/list/'+item.cid}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
               
            </div> 
        );
    }
}
 
export default Index;