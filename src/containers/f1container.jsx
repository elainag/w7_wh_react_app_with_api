import React, { useState, useEffect } from "react";
import DriverList from '../components/Drivers/DriverList'

function F1Container() {

    const [drivers, setDrivers] = useState([]);
    // const [constructor, setContrustor] = useState([]);

    async function getDrivers() {
        const url = `https://ergast.com/api/f1/2022/drivers.json`;
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json()
        setDrivers(data.MRData.DriverTable.Drivers)
    }

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <div>
            <h1>Container</h1>
            <li><DriverList drivers={drivers} /></li>
        </div>

    )
}

export default F1Container;

