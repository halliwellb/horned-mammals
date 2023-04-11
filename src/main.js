import React from 'react';
import HornedMammal from './HornedMammals';
import mammals from "./HornedAnimals";

function createMammals(mammals) {
    return(
        <HornedMammal className="myAnimal"
        key = {mammals._id}
        imageSRC = {mammals.image_url}
        altName = {mammals.title}
        description = {mammals.description}
        horns= {mammals.horns}
        />
    )
}


class Main extends React.Component {
    render() {
        return(
            <div>
                {mammals.map(createMammals)}
            </div>
        )
    }
}

export default Main;
