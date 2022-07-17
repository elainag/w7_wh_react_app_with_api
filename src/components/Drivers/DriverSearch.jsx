import React from "react";
import DriverDetails from "./DriverDetails";
import SearchDriverDetail from "./SearchDriverDetail";

const DriverSearch = ({ drivers, search }) => {
    const driverInfo = drivers.filter((driver, key) => {
        if (search === "") {
            return <DriverDetails key={key} value={driver.driverId} driver={driver} />
        } else if (driver.familyName.toLowerCase().includes(search.toLowerCase())) {
            return search;
        }
    }).map((driver, key) => {
        return <DriverDetails key={key} value={driver.driverId} driver={driver} />
        // the below code renders all the driver details in the search function
        // return <SearchDriverDetail key={key} value={driver.driverId} driver={driver} />
    })

    return (
        <div>
            {driverInfo}
        </div>

    )
}

export default DriverSearch;