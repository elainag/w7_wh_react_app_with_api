import React from "react"


const SearchDriverDetail = ({ driver }) => {
    return (
        <div className="container-details">
            {/* <h3>{index + 1}</h3> */}
            <p>Name: {driver.givenName} {driver.familyName}</p>
            <p>DOB: {driver.dateOfBirth}</p>
            <p>Nationality: {driver.nationality}</p>
            <p>Perm Numuber: {driver.permanentNumber}</p>
            <a href={driver.url}>Wiki</a>
            {/* <iframe src={driver.url} width="540" height="450"></iframe> */}
        </div>


    )
}

export default SearchDriverDetail;