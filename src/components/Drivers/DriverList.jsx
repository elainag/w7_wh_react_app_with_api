import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver, index) => {
        return <DriverDetails key={index} value={driver.code} driver={driver} />
    })
    return (
        <li >
            <div className="flex-items">
                {driverInfo}
            </div>
        </li>

    )
}

export default DriverList