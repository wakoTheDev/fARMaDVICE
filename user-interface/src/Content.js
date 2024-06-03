import './App1.css';
import Tray from './Tray';
import Main from './Main';




const Content = ({component,handleComponentChange}) => { 
    return(
            <section style={{width:'90%', margin:'auto',display:'flex'}}>
            <Tray handleComponentChange={handleComponentChange}/>
            <Main component={component}/>
        </section>
                
    );
}

export default Content;