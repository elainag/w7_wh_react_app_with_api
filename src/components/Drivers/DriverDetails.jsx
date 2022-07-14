import React from "react";

const DriverDetails = ({ driver }) => {
    return (
        <li> {driver.givenName} {driver.familyName}</li>
    )

}
export default DriverDetails;

