import React from "react";
import ConstructorList from "./ListConstructor";


const ConstructorOptions = ({ constructors, onConstuctorClick }) => {

    const constructorInfo = constructors.map((constructor, index) => {
        return <ConstructorList constructor={constructor} key={index} onConstructorClick={onConstuctorClick} />

    })
}

export default ConstructorOptions;