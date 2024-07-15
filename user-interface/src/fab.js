import { useState,useEffect,useRef } from 'react';
import "./fab.css"
import React from "react";
import chat from './chat.png'
// import close from './close.png'
// import UserInterface from './chatbot';
import ChatbotUI from './newchatbot'
const Fab = () =>{
    const [currentComponent, setCurrentComponent] = useState(false);
    const [fixedTop, setFixedTop] = useState(0);
  

    const getComponent = () => {
        setCurrentComponent(!currentComponent);
    };
    const positionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          setFixedTop('40%'); 
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
      }, []);
    
  
    return(
        <div ref={positionRef} className='icon_position'>
            {currentComponent ? <ChatbotUI getComponent={getComponent}/>:<img src={chat} alt="" style={{width:'25%',height:'20%',position:'absolute',top:'80%',left:'75%',zIndex:2}} onClick={()=>{getComponent()}}/>}
            
        </div>
    );
}

export default Fab;