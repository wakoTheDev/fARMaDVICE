const Instant = () =>{
    return <>
    <div style={{ width:'60vw',margin:'10px'}}>
        <button style={{marginLeft:'90%'}} className='btn system-button'>Add</button>
    </div>
    <form style={{marginLeft:'10px',width:'60vw',padding:'5px'}}>
        <fieldset>
            <caption>Tap&nbsp;details:</caption>
            <label htmlFor="tapname" >Tap &nbsp;Name:</label>
            <input id="tapname" name="tapname" type="text"/> <br/>
            <label htmlFor="duration">Time: </label>
            <input type="number" id="duration" name="duration"/>
        </fieldset>
        <section style={{display:'flex'}}>
        <button className="btn round-btn" id="begin">Begin</button>
        <button className="btn round-btn">Pause</button>
        <button className="btn round-btn" id="stop">Stop</button>
        </section>
    </form>
    </>
}


export default Instant;
