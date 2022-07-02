import React from "react";
import "./constructors.css"

const ConstructorsDetails = ({ constructor }) => {
    return (
        <div>
            <p className="container"> {constructor.name}</p>
        </div>
    )
}

export default ConstructorsDetails;