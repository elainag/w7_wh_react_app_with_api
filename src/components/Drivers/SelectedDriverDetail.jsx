import React from "react"


const SelectDriverDetail = ({ selectedDriver }) => {
    return (
        <div className="container-details">
            {/* <h3>{index + 1}</h3> */}
            <p>Name: {selectedDriver.givenName} {selectedDriver.familyName}</p>
            <p>DOB: {selectedDriver.dateOfBirth}</p>
            <p>Nationality: {selectedDriver.nationality}</p>
            <p>Perm Numuber: {selectedDriver.permanentNumber}</p>
            <a href={selectedDriver.url}>Wiki</a>
            {/* <iframe src={driver.url} width="540" height="450"></iframe> */}
        </div>


    )
}

export default SelectDriverDetail;