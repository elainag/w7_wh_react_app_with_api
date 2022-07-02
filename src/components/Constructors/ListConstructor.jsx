import React from "react";

const ConstructorList = ({ constructor, onConstructorClick }) => {

    const handleClick = function () {
        onConstructorClick(constructor);
    }

    return <li onClick={handleClick}> {constructor.name}</li>



}

export default ConstructorList;
