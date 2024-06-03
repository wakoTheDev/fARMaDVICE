import Disruptions from './disruptions'


const Disrupt = ({handleComponentChange} ) =>{
    
    return(
        <>
        <article onClick={() =>{handleComponentChange(<Disruptions/>)}}>Weather</article>
        <article onClick={() =>{handleComponentChange(<Disruptions/>)}}>MoistureLevel</article>
        </>
    );
}
export default Disrupt;