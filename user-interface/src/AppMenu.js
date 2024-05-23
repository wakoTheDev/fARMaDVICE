// import React,{useReducer} from "react";


let container = document.createElement('div');
let navigation = document.getElementById('navigation-panel');

    const system =  () => {
        navigation.innerHTML = '';
        let pressure = document.createElement('div');
        pressure.textContent ='Pressure';
        let waterLevel = document.createElement('div');
        waterLevel.textContent = 'Water level';
        const options = [pressure,waterLevel];
        const add = (options) =>{
            try{
            for (let i=0;i<=options.length;i++){
                
                    navigation.appendChild(options[i]);
                
            }
            }catch(e){
                throw new Error('error')
            }
        }
        return add(options);    
    }
    const active =  () => {
        navigation.innerHTML = '';
        let farmName = document.createElement('div');
        farmName.textContent = 'Cabbage';
    
        const add = (options) =>{
            try{
                navigation.appendChild(options);
            }catch(e){
                throw new Error('error');
            }
            
        }
        return add(farmName);
        
    }
    const disruption =  () => {
        let weather = document.createElement('div');
        navigation.innerHTML = '';
        weather.textContent = 'Current Weather';
        let MoistureLevel= document.createElement('div');
        MoistureLevel.textContent = 'Moisture levels';
        const options = [MoistureLevel,weather];
        const add = (options) =>{
            try{
                for (let i=0;i<=options.length;i++){
               
                navigation.appendChild(options[i]);
                
            }}catch(e){
                console(e.error);
                throw new Error('error');
            }
        }
        return add(options);
        
    }
    const irrigate =  () => {
        
        const newSchedule = container;
        const current = container;
        const instant = container;

        newSchedule.innerHTML = 'Add schedule'; 
        current.innerHTML = 'On going';
        instant.innerHTML = 'Instant';

        navigation.innerHTML = newSchedule;
        console.log('added 4')
        navigation.appendChild(current);
        console.log('added 3')
        navigation.appendChild(instant);
        console.log('added 1')
        }

    // const reducer = (state,action) =>{

    // }

const AppMenu = () => {
    
   return(<>
        <div className='main_menu'>
            <section onClick={irrigate}>Irrigate</section>
            <section onClick={active}>Active</section>
            <section onClick={disruption}>Disruptions</section>
            <section onClick={system}>System</section>
    </div>
    <hr/>
    </> );
}


export default AppMenu;