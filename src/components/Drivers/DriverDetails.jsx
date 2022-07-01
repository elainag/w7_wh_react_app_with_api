import React from "react";

const DriverDetails = ({ driver, index }) => {
    const details = driver.code
    return (
        <div>
            <h3>{index + 1}</h3>
            <p>{driver.code}</p>
        </div>

    )

}

export default DriverDetails;