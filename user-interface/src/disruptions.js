import WeatherDisplay from "./demoapp";


const Disruptions = () =>{
    return <div>
        <h1>Moisture Report</h1>
        <p>Moisture level:{}</p>
        <section>
            <div id="currentMoisture">{}</div>
            <button className="btn">Moisture</button>
        </section>

        <h1>Weather summary</h1>
        <WeatherDisplay/>
    </div>
}

export default Disruptions;