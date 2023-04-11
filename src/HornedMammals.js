import React from 'react';

class HornedMammal extends React.Component {
    render() {
        return (
            <div>
                <title><h2>Tile {this.props.title}</h2></title>
                <img src={this.props.imageSRC} alt={this.props.altName} width="700" height="600" > </img>
                <p>Description: {this.props.description}</p>
                <p>Number of horns: {this.props.horns}</p>
            </div>
        )
    }
}

export default HornedMammal;
