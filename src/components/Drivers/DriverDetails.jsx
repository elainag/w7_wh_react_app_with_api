import React from "react";
import "./drivers.css"

const DriverDetails = ({ driver }) => {
    return (

        <div>

            <p className="container">{driver.givenName} {driver.familyName}</p>
        </div>

    )

}
export default DriverDetails;

