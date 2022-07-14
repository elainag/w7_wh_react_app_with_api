import React from "react"


const SearchDriverDetail = ({ searchedDriver }) => {
    return (
        <div className="container-details">
            {/* <h3>{index + 1}</h3> */}
            <p>Name: {searchedDriver.givenName} {searchedDriver.familyName}</p>
            <p>DOB: {searchedDriver.dateOfBirth}</p>
            <p>Nationality: {searchedDriver.nationality}</p>
            <p>Perm Numuber: {searchedDriver.permanentNumber}</p>
            <a href={searchedDriver.url}>Wiki</a>
            {/* <iframe src={driver.url} width="540" height="450"></iframe> */}
        </div>


    )
}

export default SearchDriverDetail;