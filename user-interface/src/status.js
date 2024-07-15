

const Status = () =>{
    const createdSchedule = {
        farmname:['cabbages','tomatoes','dairy'],
        duration:['30','15','60'],
        saturation:['600','100','100'],
        frequency:['2','2','1'],
    }
    return <>
    
        <div style={{width:'60vw',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em'}}><p>Duration:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em'}}><p>Saturation:</p></section>
                <section style={{width:'15%',padding:'2px',fontSize:'0.8em'}}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px',margin:'4px'}}>
            <section  style={{width:'25%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[0]}</section>
            <section style={{width:'25%',marginTop:'0',padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[0]}</section>
            <section style={{width:'25%',marginTop:'0',padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[0]}</section>
            <section style={{width:'25%',marginTop:'0',padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[0]}</section>
        </section>
        <section style={{width:'100%',display:'flex'}}>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Activate</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Update</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Dectivate</button>
        </section>
        </div>
        <div style={{width:'60vw',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em' }}><p>Duration:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em' }}><p>Saturation:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em' }}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px'}}>
            <section  style={{width:'25%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[1]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[1]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[1]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[1]}</section>
        </section>
        <section style={{with:'100%',display:'flex'}}>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Activate</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Update</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Dectivate</button>
        </section>
        </div>
        <div style={{width:'60vw',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em' }}><p>Duration:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em '}}><p>Saturation:</p></section>
                <section style={{width:'25%',padding:'2px',fontSize:'0.8em' }}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px'}}>
            <section  style={{width:'25%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[2]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[2]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[2]}</section>
            <section style={{width:'25%',marginTop:'0' ,padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[2]}</section>
        </section>
        <section style={{width:'100%',display:'flex'}}>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Activate</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Update</button>
        <button className='btn' style={{height:"30px",borderRadius:"4px"}}>Dectivate</button>
        </section>
        </div>
    </>
}


export default Status;