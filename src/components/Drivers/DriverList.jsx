import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver) => {
        return <DriverDetails driver={driver} />
    })


    return (

        <div>
            <ul>
                <h2>Driver List 2022 Season</h2>
                {driverInfo}
            </ul>
        </div>

    )
}

export default DriverList