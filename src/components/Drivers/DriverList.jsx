import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver, key) => {
        return <DriverDetails key={key} value={driver.driverId} driver={driver} />
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