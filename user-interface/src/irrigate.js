
import Schedule from "./schedule";
import Status from "./status";
import Instant from "./instant";

const Irrigate = ({handleComponentChange}) =>{
    
    return (
        <>
        <article onClick={()=>{handleComponentChange(<Schedule/>)}}>Add</article>
        <article onClick={()=>{handleComponentChange(<Status/>)}}>Ongoing</article>
        <article onClick={()=>{handleComponentChange(<Instant/>)}}>Instant</article>
        </>
        
    );
}

export default Irrigate;