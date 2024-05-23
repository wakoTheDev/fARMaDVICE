import React from "react";
import image from './chat.png'
const Fab = () =>{
    return(
        <div style={{width:'50px',height:'50px', borderRadius:'5px',position:'absolute',top:'90%',left:'90%',zIndex:'1'}}>
            <img src={image} alt="" width={'100%'} height={'100%'}/>
        </div>
    );
}

export default Fab;