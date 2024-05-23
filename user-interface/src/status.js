

const Status = () =>{
    const createdSchedule = {
        farmname:['cabbages','tomatoes','dairy'],
        duration:['30','15','60'],
        saturation:['600','100','100'],
        frequency:['2','2','1'],
    }
    return <>
    
        <div style={{width:'100%',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{with:'30%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Duration:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Saturation:</p></section>
                <section style={{with:'10%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px'}}>
            <section  style={{with:'40%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[0]}</section>
            <section style={{with:'30%',marginTop:'0',marginLeft:'15px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[0]}</section>
            <section style={{with:'20%',marginTop:'0',marginLeft:'40px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[0]}</section>
            <section style={{with:'10%',marginTop:'0',marginLeft:'50px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[0]}</section>
        </section>
        <section style={{with:'100%',display:'flex'}}>
        <button className='btn'>Activate</button>
        <button className='btn'>Update</button>
        <button className='btn'>Dectivate</button>
        </section>
        </div>
        <div style={{width:'100%',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{with:'30%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Duration:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Saturation:</p></section>
                <section style={{with:'10%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px'}}>
            <section  style={{with:'40%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[1]}</section>
            <section style={{with:'30%',marginTop:'0',marginLeft:'15px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[1]}</section>
            <section style={{with:'20%',marginTop:'0',marginLeft:'40px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[1]}</section>
            <section style={{with:'10%',marginTop:'0',marginLeft:'50px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[1]}</section>
        </section>
        <section style={{with:'100%',display:'flex'}}>
        <button className='btn'>Activate</button>
        <button className='btn'>Update</button>
        <button className='btn'>Dectivate</button>
        </section>
        </div>
        <div style={{width:'100%',padding:'1%',border:'1px solid #cccccc ',margin:'4px'}}>
        <section style={{width:'100%',display:'flex',padding:'5px',alignContent:'space between'}}>
                <section style={{with:'30%',padding:'2px',fontSize:'0.8em',}}><p>Farm name:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Duration:</p></section>
                <section style={{with:'20%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Saturation:</p></section>
                <section style={{with:'10%',padding:'2px',fontSize:'0.8em',marginLeft:'10px'}}><p>Frequency:</p></section>
            </section>   
        <section style={{width:'100%',display:'flex',padding:'5px'}}>
            <section  style={{with:'40%',padding:'2px',fontWeight:'bold'}}>{createdSchedule.farmname[2]}</section>
            <section style={{with:'30%',marginTop:'0',marginLeft:'15px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.duration[2]}</section>
            <section style={{with:'20%',marginTop:'0',marginLeft:'40px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.saturation[2]}</section>
            <section style={{with:'10%',marginTop:'0',marginLeft:'50px',padding:'2px',fontWeight:'bold'}}>{createdSchedule.frequency[2]}</section>
        </section>
        <section style={{with:'100%',display:'flex'}}>
        <button className='btn'>Activate</button>
        <button className='btn'>Update</button>
        <button className='btn'>Dectivate</button>
        </section>
        </div>
    </>
}


export default Status;