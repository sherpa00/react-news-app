import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <nav>
                <h1 id="logo">NEWS-TIME</h1>
                <div className='nav-links'>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#trending">Trending</a></li>
                    </ul>
                </div>
                <h2>CLOSE</h2>
            </nav>
        );
    }
}
 
export default Navbar;