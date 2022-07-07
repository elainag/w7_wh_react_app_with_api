import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver, key) => {
        return <DriverDetails key={key} value={driver.driverId} driver={driver} />
    })
    return (
        <>
            <h3>DriverList</h3>
            <li >
                <div className="flex-items">
                    {driverInfo}
                </div>
            </li>
        </>

    )
}

export default DriverList