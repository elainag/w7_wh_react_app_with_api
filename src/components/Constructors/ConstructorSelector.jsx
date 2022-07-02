import React from "react";

const ConstructorSelector = ({ constructors, onConstructorSelected }) => {

    const handleChange = function (e) {
        const chosenConstructor = constructors[e.target.value];
        onConstructorSelected(chosenConstructor);

    }
    const constructorOptions = constructors.map((constructor, index) => {
        return <option value={index} key={index}>{constructor.name} </option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>

            <option value="" >Choose Constructor</option>
            {constructorOptions}


        </select>
    )
}

export default ConstructorSelector;