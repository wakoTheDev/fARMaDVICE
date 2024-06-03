import Irrigate from "./irrigate";
import Active from "./active"
import Disrupt from "./Disrupt"
import Stem from "./stem"
import Nav from "./TrayNav";
import React,{useState} from "react";





const Tray = ({handleComponentChange}) =>{
    const [currentComponent, setCurrentComponent] = useState('A');

    const replaceComponent = (component) => {
        setCurrentComponent(component);
    };

  let ComponentToRender;
  switch (currentComponent) {
    case 'A':
      ComponentToRender = Active;
      break;
    case 'B':
      ComponentToRender = Disrupt;
      break;
    case 'C':
      ComponentToRender = Stem;
      break;
    default:
      ComponentToRender = Irrigate;
  }

    return(
        < section className='navigation' id="navigation-panel">
            <Nav replaceComponent={replaceComponent} />
          < ComponentToRender handleComponentChange={handleComponentChange}/>
        </section>
    );
}

export default Tray;
