import React from "react";
import ConstructorsDetails from "./ConstructorsDetails";


const ConstructorsList = ({ constructors }) => {
    const constructorInfo = constructors.map((constructor, index) => {
        return <ConstructorsDetails constructor={constructor} key={index} value={constructor.constructorId} />
    })

    return (
        <div>
            <ul>
                <h2>Constructors 2022 Season</h2>
                {constructorInfo}
            </ul>
        </div>
    )
}


export default ConstructorsList;