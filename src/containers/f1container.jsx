import React, { useState, useEffect } from "react";
import DriverList from '../components/Drivers/DriverList'
import ConstructorsList from "../components/Constructors/ConstructorsList";

function F1Container() {

    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);

    async function getDrivers() {
        const url = `https://ergast.com/api/f1/2022/drivers.json`;
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json()
        setDrivers(data.MRData.DriverTable.Drivers)
    }

    async function getConstructors() {
        const url = `http://ergast.com/api/f1/2022/2/constructors.json`;
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        setConstructors(data.MRData.ConstructorTable.Constructors)
    }

    useEffect(() => {
        getDrivers();
    }, []);

    useEffect(() => {
        getConstructors();
    }, []);

    return (
        <div>
            <h1>Container</h1>
            <li><DriverList drivers={drivers} /></li>
            <li><ConstructorsList constructors={constructors} /></li>
        </div>

    )
}

export default F1Container;

