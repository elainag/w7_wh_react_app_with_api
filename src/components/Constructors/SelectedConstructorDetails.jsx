import React from "react";

const SelectConstructorDetail = ({ selectedConstructor }) => {
    return (
        <div>
            <p> {selectedConstructor.name}</p>
            <p>{selectedConstructor.nationality}</p>
            <a href={selectedConstructor.url}></a>
        </div>
    )
}

export default SelectConstructorDetail;