const Disruptions = () =>{
    return <div>
        <h1>Moisture Report</h1>
        <p>Moisture level:{}</p>
        <section>
            <div id="currentMoisture">{}</div>
            <button className="btn">Moisture</button>
        </section>

        <h1>Weather summary</h1>
        <p>Today Weather:{}</p>
        <p>Predicted Weather:{} </p>
        <p>Prediction refresh rate:12hrs</p>

        <button className='btn'>Latest</button>
    </div>
}

export default Disruptions;