import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver) => {
        return <DriverDetails key={driver.driverId} driver={driver} />
    })
    return (
        <div>
            <h3>DriverList</h3>
            <div>
                {driverInfo}
            </div>
        </div>

    )
}

export default DriverList