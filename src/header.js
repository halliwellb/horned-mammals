import React from 'react';

class Header extends React.Component {
    //method//
    render() {
        return <header className="Header-App"> <h1>Horned Mammals</h1> <br></br>Created by {this.props.creator}</header>
    }
}

export default Header;
