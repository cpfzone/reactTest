import React, { Component } from 'react';
import {Route, Link, Router} from 'react-router-dom';
import Flutter from './Flutter.js';
import ReactPage from './ReactPage.js';
import Vue from './Vue.js';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <div className='topNav'>
                    <ul>
                        <li><Link to="/video/ReactPage">React教程</Link></li>
                        <li><Link to="/video/Flutter">Flutter教程</Link></li>
                        <li><Link to="/video/Vue">Vue教程</Link></li>

                    </ul>
               </div>
               <div className="videoContent">
                    <div><h3>视频教程</h3></div>
                    
                    <Route path="/video/ReactPage/" component={ReactPage} />
                    <Route path="/video/Flutter/" component={Flutter} />
                    <Route path="/video/Vue/" component={Vue} />

               </div>
            </div> 
        );
    }
}
 
export default Index;