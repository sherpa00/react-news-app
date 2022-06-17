
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inpRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onHandleSubmit(e.target.value);
    }

    handleTextChange = (e) => {
        this.props.onTextChange(e.target.value);
    }

    render() { 
        return (
            <div className={this.props.class} id="home">
                <h1>SEARCH NEWS</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="input"
                        ref={this.inpRef}
                        value={this.props.text}
                        onChange={this.handleTextChange}
                    />
                    <input
                        type="submit"
                        id="submit"
                        
                    />
                </form>
            </div>
        );
    }
}
 
export default SearchBar;