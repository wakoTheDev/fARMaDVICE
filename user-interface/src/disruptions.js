import WeatherDisplay from "./demoapp";


const Disruptions = () =>{
    return <div style={{width:'60vw',margin:'15px'}}>
        <h1>Moisture Report</h1>
        <p>Moisture level:{}</p>
        <section>
            <div id="currentMoisture">{}</div>
            <button className="btn system-button">Moisture</button>
        </section>

        <h1>Weather summary</h1>
        <WeatherDisplay/>
    </div>
}

export default Disruptions;