import React from "react";

class Footer extends React.Component{
    
    render(){
        return<footer className="App-footer"> Author: {this.props.creator} circa 04/2023</footer>
    }
}

export default Footer; 