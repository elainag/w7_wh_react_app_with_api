import React from "react";

const DriverDetails = ({ driver }) => {
    return (
        <div>
            {/* <h3>{index + 1}</h3> */}
            <p>Name: {driver.givenName} {driver.familyName}</p>
            <p>DOB: {driver.dateOfBirth}</p>
            <p>Nationality: {driver.nationality}</p>
            <p>Perm Numuber: {driver.permanentNumber}</p>
            <a href={driver.url}>Wiki</a>




        </div>

    )

}

export default DriverDetails;