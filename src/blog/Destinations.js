import React from "react";
import Destination from "./Destination";

const Destinations = ({destinations}) => {
    return <lh>
        {
            destinations.map(destination =>
                <Destination destination={destination}/>)
        }
    </lh>

}

export default Destinations;
