import React from 'react';


class Main extends React.Component {

    render() {
        return <p>HornedBeast</p>
    }
}

class HornedBeast extends React.Component {
    render() {
        return(
        <>
            <HornedBeast/>
            <HornedBeast/>
        </>
        )
    }
}