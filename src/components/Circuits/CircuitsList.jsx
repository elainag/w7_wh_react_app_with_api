import React from "react";
import CircuitDetails from "./CircuitsDetails";

const CircuitList = ({ circuits }) => {
    const circuitInfo = circuits.map((circuit, index) => {
        return <CircuitDetails key={index} value={circuit.circuitId} circuit={circuit} />
    })



    return (
        < div >
            <ul>
                <h2>Circuits 2022 Season</h2>
                {circuitInfo}
            </ul>
        </div >
    )
}

export default CircuitList;