import './App1.css'
import Tray from './Tray'
import Main from './Main'

const Content = () => {
    return(
        <section style={{width:'90%', margin:'auto',display:'flex'}}>
            <Tray/>
            <Main/>
        </section>
    );
}

export default Content;