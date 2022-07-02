import React from "react";

const DriverList = ({ driver, onDriverClick }) => {

    const handleClick = function () {
        onDriverClick(driver);
    }

    return <li onClick={handleClick}>{driver.givenName} {driver.familyName}</li>
}

export default DriverList;