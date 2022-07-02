import React from "react";
import ConstructorsDetails from "./ConstructorsDetails";


const ConstructorsList = ({ constructors }) => {
    const constructorInfo = constructors.map((constructor) => {
        return <ConstructorsDetails constructor={constructor} />
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