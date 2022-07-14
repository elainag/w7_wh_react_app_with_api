import React from "react";
import SearchDriverDetail from "./SearchDriverDetail";


const DriverSearch = ({ drivers, onSearchedDriver }) => {

    const handleChange = function (e) {
        const findDriver = drivers[e.target.value];
        console.log(findDriver)
        onSearchedDriver(findDriver);
    }

    const driverInfo = drivers.filter((driver) => {
        if (onSearchedDriver === "") {
            return null
        } else if (driver.familyName.includes(onSearchedDriver)) {
            return onSearchedDriver;
        }
    }).map((driver) => {
        return <SearchDriverDetail key={driver.driverId} driver={driver} />
    })

    return (
        <div>
            <input placeholder="Search Driver" onChange={handleChange} />
            {driverInfo}
        </div>

    )
}

export default DriverSearch;