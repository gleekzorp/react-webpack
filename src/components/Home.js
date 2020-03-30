import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Daniel'
        }
    }
    render() { 
        return (
            <div>
                <h1>HOME</h1>
                <p>{this.state.name}</p>
            </div>
        );
    }
}
 
export default Home;