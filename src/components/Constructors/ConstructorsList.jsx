import React from "react";
import ConstructorsDetails from "./ConstructorsDetails";


const ConstructorsList = ({ constructors }) => {
    const constructorInfo = constructors.map((constructor) => {
        return <ConstructorsDetails constructor={constructor} />
    })
}


export default ConstructorsList;