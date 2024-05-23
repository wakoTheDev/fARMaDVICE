const System = () =>{
    return(<>
    <div>
        <h3>Real time pressure</h3>
        <section className='pipe-pressure'>{900}atm</section>
        <button className='btn system-button'>CheckPressure</button>
        <h4>Water level</h4>
        <section style={{marginLeft:'50px',fontWeight:'bold'}}>{0.6}</section>
        <section style={{display:'flex', padding:'5px'}}>
        <button className="btn">Pump</button>
        <button className="btn system-button">EndPump</button>
        <button className="btn system-button">Pause</button>
        </section>
    </div>
    </>);
}


export default System;