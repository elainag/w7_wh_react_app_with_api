import React, { useState, useEffect } from "react";
import DriverDetails from "../components/Drivers/DriverDetails";
import DriversList from '../components/Drivers/DriverList'

function F1Container() {

    const [driver, setDriver] = useState([]);
    // const [constructor, setContrustor] = useState([]);

    async function getDrivers() {
        const url = `https://ergast.com/api/f1/2022/drivers.json`;
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        setDriver(data)
    }

    // const getDrivers = function(){
    //     fetch("http://ergast.com/api/f1/2022/drivers.json")
    //     .then(result => result.json())
    //     .then(drivers => setDriver)
    // }

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <>
            <h1>Container</h1>
            <DriversList />
            <DriverDetails />
        </>

    )
}

export default F1Container;

