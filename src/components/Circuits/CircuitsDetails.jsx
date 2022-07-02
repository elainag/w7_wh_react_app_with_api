import React from "react";
const CircuitDetails = ({ circuit }) => {
    return (
        <div>
            <p>Name: {circuit.circuitName} </p>
            <p>Location: {circuit.Location.country} </p>
            <p>City: {circuit.Location.locality} </p>
            <a href={circuit.url}>Wiki</a>
        </div>
    )
}

export default CircuitDetails;