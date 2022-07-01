import React from "react";

const DriverDetails = ({ driver }) => {
    return (
        <div>
            {/* <h3>{index + 1}</h3> */}
            {driver.driverId}
            {driver.code}
            {driver.dateOfBirth}
            {driver.familyName}
            {driver.givenName}
            {driver.nationality}
            {driver.permanentNumber}
            {driver.url}
        </div>

    )

}

export default DriverDetails;