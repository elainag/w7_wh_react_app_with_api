import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver, index) => {
        return <DriverList driver={driver} index={index} />
    })


    return (

        <div>
            <ul>
                {driverInfo}
            </ul>
        </div>

    )
}

export default DriverList