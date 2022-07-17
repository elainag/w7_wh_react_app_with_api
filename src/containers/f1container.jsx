import React, { useState, useEffect } from "react";
import DriverList from '../components/Drivers/DriverList'
import ConstructorsList from "../components/Constructors/ConstructorsList";
import CircuitsList from "../components/Circuits/CircuitsList";
import DriverDetails from "../components/Drivers/DriverDetails";
import DriverSelector from "../components/Drivers/DriverSelector";
import SelectDriverDetail from "../components/Drivers/SelectedDriverDetail";
import ConstructorSelector from "../components/Constructors/ConstructorSelector";
import SelectConstructorDetail from "../components/Constructors/SelectedConstructorDetails";
import DriverSearch from "../components/Drivers/DriverSearch";



function F1Container() {

    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [search, setSearch] = useState("")
    const [constructors, setConstructors] = useState([]);
    const [selectedConstructor, setSelectedConstructor] = useState([]);
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

    const onConstructorSelected = function (constructor) {
        setSelectedConstructor(constructor);
    }

    return (
        <body>
            <h1>F1 Season Insights 2022</h1>
            <main>
                <section>
                    <DriverSelector drivers={drivers} onDriverSelected={onDriverSelected} />
                    {selectedDriver ? <SelectDriverDetail selectedDriver={selectedDriver} /> : null}

                    <ConstructorSelector constructors={constructors} onConstructorSelected={onConstructorSelected} />
                    {selectedConstructor ? <SelectConstructorDetail selectedConstructor={selectedConstructor} /> : null}
                </section>

                <div>
                    <input placeholder="Search Driver" onChange={event => setSearch(event.target.value)} />
                    <DriverSearch drivers={drivers} search={search} />





                </div>

                <section>
                    <div >
                        {/* <p> <DriverList drivers={drivers} /></p> */}
                    </div>

                    <ConstructorsList constructors={constructors} />
                </section>

                <section>
                    <li><CircuitsList circuits={circuits} /></li>

                </section>

            </main >
        </body>

    )
}

export default F1Container;

