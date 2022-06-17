import NewsBox from "./NewBox";
import React, { Component } from 'react';


class SearchContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Mounted");
        console.log(this.props.resData);
    }

    componentDidUpdate() {
        console.log("Changed")
        console.log(this.props.resData);
    }

    render() { 
        return (
            <div className="search-container">
                {
                    this.props.resData === null ? null : this.props.resData.map((el,index) => {
                        return <NewsBox data={el} key={index}/>
                    })
                }
               
            </div>
        );
    }
}
 
export default SearchContainer;