import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:""
         }
    }
    render() { 
        return ( 
            <h2>
                List-page-{this.state.id}
            </h2>
         );
    }
    componentDidMount(){
        console.log(this.props.match)
        this.setState({
            id:this.props.match.params.id
        })
    }
}
 
export default List;