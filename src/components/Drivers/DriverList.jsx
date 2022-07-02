import React from "react";
import DriverDetails from "./DriverDetails";
import "./drivers.css"

const DriverList = ({ drivers }) => {
    const driverInfo = drivers.map((driver) => {
        return <DriverDetails driver={driver} />
    })


    return (

        <section>
            <ul>
                <h2>Drivers</h2>
                {driverInfo}
            </ul>
        </section>

    )
}

export default DriverList