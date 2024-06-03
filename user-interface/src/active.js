import Status from "./status";

const Active = ({handleComponentChange}) =>{
     
    return(
        <>
        <article onClick={()=>handleComponentChange(<Status/>)}>Cabbage</article>
        <article onClick={()=>handleComponentChange(<Status/>)}>Tomatoes</article>
        <article onClick={()=>handleComponentChange(<Status/>)}>Carrots</article>
        </>
    );
}

export default Active;