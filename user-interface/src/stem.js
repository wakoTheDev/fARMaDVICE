import System from "./system";


const Stem = ({handleComponentChange}) =>{
    return(
        <>
        <article onClick={()=>{handleComponentChange(<System/>)}}>Pressure</article>
        <article onClick={()=>{handleComponentChange(<System/>)}}>waterLevel</article>
        </>
    );
}

export default Stem;