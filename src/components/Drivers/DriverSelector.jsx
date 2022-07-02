import React from "react";

const DriverSelector = ({ drivers, onDriverSelected }) => {

    const handleChange = function (e) {
        const chosenDriver = drivers[e.target.value];
        onDriverSelected(chosenDriver);

    }

    const driverOptions = drivers.map((driver, index) => {
        return <option value={index} key={index}>{driver.givenName} {driver.familyName}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>

            <option value="" >Choose Driver</option>
            {driverOptions}
        </select>
    )
}

export default DriverSelector;