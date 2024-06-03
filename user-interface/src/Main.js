import React from 'react';

const Main = (props) =>{
    return (        
            <section style={{with:'500px',minHeight:'300px ',boxSizing:'border-box'}}>
            {props.component}
            </section>    
    );
}


export default Main;