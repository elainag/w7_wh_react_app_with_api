import React, { useState, useEffect } from "react";
import DriversList from '../components/Drivers/DriverList'
import DriverDetails from "../components/Drivers/DriverDetails";

function F1Container() {

    const [drivers, setDriver] = useState([]);
    // const [constructor, setContrustor] = useState([]);

    async function getDrivers() {
        const url = `https://ergast.com/api/f1/2022/drivers.json`;
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json()
        setDriver(data.MRData.DriverTable.Drivers)
    }

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <>
            <h1>Container</h1>
            <DriversList drivers={drivers} />
            <DriverDetails />
        </>

    )
}

export default F1Container;

