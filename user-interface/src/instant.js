const Instant = () =>{
    return <>
    <button className="btn page-end">Add</button>
    <form style={{marginLeft:'50px'}}>
        <fieldset>
            <caption>Tap&nbsp;details:</caption>
            <label htmlFor="tapname">Tap &nbsp;Name:</label>
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
