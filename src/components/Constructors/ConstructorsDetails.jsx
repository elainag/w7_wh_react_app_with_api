import React from "react";

const ConstructorsDetails = ({ constructor }) => {
    return (
        <div>
            <p>Name: {constructor.name}</p>
            <p>Nationality: {constructor.nationality}</p>
            <a href={constructor.url}>Wiki</a>
        </div>
    )
}

export default ConstructorsDetails;