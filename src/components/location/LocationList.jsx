import React from 'react';

//Style
import '../Style.css';
import Loc from './Location';


//Location JSX
const LocationList = props => {
    //Props
    const {
        data,
        setPointAndCheck,
    } = props;

    //Locations
    const locList = data.data.features.map(element => (
        <Loc 
            key={"loc" + element.id}
            placeName={element.place_name}
            pointGeo={element.center}
            setPointAndCheck={setPointAndCheck}
        />
    ))


    //Return
    return (
        <div className="LocationList">
            {locList}
        </div>
    );
}



export default LocationList;