import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home';

const AppRouter = function(){
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
        <Router>
            <ul>
                <li>
                    <Link to={'/'} >首页</Link>
                    
                    </li>
                <li>
                   { <Link to={'/list/123'} >列表</Link>}
                </li>
            </ul>
            <Route path='/' exact component={Index} />
            <Route path='/list/:id'  component={List} />
            <Route path='/home'  component={Home} />
        </Router>
    )
}
export default AppRouter;