import React from "react";

const SelectConstructorDetail = ({ selectedConstructor }) => {
    return (
        <div>
            <p>Name: {selectedConstructor.name}</p>
            <p>Nationality: {selectedConstructor.nationality}</p>
            <a href={selectedConstructor.url}>Wiki</a>
        </div>
    )
}

export default SelectConstructorDetail;