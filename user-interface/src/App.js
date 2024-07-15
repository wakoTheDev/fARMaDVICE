// import logo from './logo.svg';

import React, { useState,createContext } from 'react';
import './App.css';
import './App1.css';
import './fab.css'
import HomeTitle from './title';
import AppMenu from './AppMenu'
import Content from './Content'
import Fab from './fab';
import Status from './status';


export const MainHook = createContext(null);

function App() {
  const [component,setComponent] = useState(<Status/>);
  const handleComponentChange = (newComponent) =>{
    setComponent(newComponent);
  }
  return ( 
      <MainHook.Provider>
      <HomeTitle/>
      <AppMenu/>
      <Content component={component} handleComponentChange={handleComponentChange}/>      
      <Fab/>
      </MainHook.Provider>
  );
}

export default App;
