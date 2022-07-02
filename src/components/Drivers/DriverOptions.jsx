import React from "react";
import DriverList from "./ListDriver";


const DriverOptions = ({ drivers, onDriverClick }) => {

    const driverInfo = drivers.map((driver, index) => {
        return <DriverList driver={driver} key={index} onDriverclick={onDriverClick} />
    })


    return (

        <div>
            <ul>
                <h2>Drivers 2022 OptionSet</h2>
                {driverInfo}
            </ul>
        </div>

    )
}

export default DriverOptions