import React from "react";
import DriverDetails from "./DriverDetails";

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver) => {
        return <DriverDetails driver={driver} />
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