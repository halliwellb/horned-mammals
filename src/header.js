import React from 'react';

class Header extends React.Component {
    //method//
    render() {
        return <p>Created by {this.props.creator}</p>
    }
}

export default Header;
