import React from "react";

const Nav = ({replaceComponent}) => {      
   return(<>
        <div style={{display:'flex',width:'90%',padding:'1%'}}>
            <section onClick={replaceComponent} className="tray-nav" id="Irrigate">Irrigate</section>
            <section onClick={()=>{replaceComponent('A')}} className="tray-nav" id="Active">Active</section>
            <section onClick={()=>{replaceComponent('B')}} className="tray-nav" id="Disrupt">Disrupt</section>
            <section onClick={()=>{replaceComponent('C')}} className="tray-nav" id="System">System</section>
    </div>
    </> );
}


export default Nav;