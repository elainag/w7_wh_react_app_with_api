import React from "react";

const DriverDetails = ({ driver }) => {
    return (
        <li className="flex-items"> {driver.givenName} {driver.familyName}</li>
    )

}
export default DriverDetails;

