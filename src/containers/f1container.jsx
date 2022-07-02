import React, { useState, useEffect } from "react";
import DriverList from '../components/Drivers/DriverList'
import ConstructorsList from "../components/Constructors/ConstructorsList";
import CircuitsList from "../components/Circuits/CircuitsList";
import DriverDetails from "../components/Drivers/DriverDetails";
import DriverSelector from "../components/Drivers/DriverSelector";
import DriverOptions from "../components/Drivers/DriverOptions";

function F1Container() {

    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [constructors, setConstructors] = useState([]);
    const [circuits, setCircuits] = useState([])

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
        // console.log(response)
        const data = await response.json()
        setConstructors(data.MRData.ConstructorTable.Constructors)
    }

    async function getCircuits() {
        const url = `http://ergast.com/api/f1/2022/circuits.json`;
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json()
        setCircuits(data.MRData.CircuitTable.Circuits)
    }

    useEffect(() => {
        getDrivers();
    }, []);


    useEffect(() => {
        getConstructors();
    }, []);


    useEffect(() => {
        getCircuits();
    }, []);

    const onDriverSelected = function (driver) {
        setSelectedDriver(driver);
    }

    return (
        <div>
            <h1>Container</h1>
            <DriverSelector drivers={drivers} onDriverSelected={onDriverSelected} />
            {selectedDriver ? <DriverDetails selectedDriver={selectedDriver} /> : null}
            <li><DriverList drivers={drivers} /></li>
            <li><ConstructorsList constructors={constructors} /></li>
            <li><CircuitsList circuits={circuits} /></li>
        </div>

    )
}

export default F1Container;

