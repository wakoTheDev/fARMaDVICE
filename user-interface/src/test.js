// main.js
import React, { useState } from 'react';
import Tray from './Tray';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(ComponentA);

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      {/* Parent component */}
      <div>
        {/* Tray component */}
        <Tray onComponentChange={handleComponentChange} />
        {/* Main component */}
        <div>
          {/* Render the current component */}
          <currentComponent />
        </div>
      </div>
    </div>
  );
};

export default Main;

// Tray.js
import React from 'react';

const Tray = ({ onComponentChange }) => {
  return (
    <div>
      {/* Text that triggers component change */}
      <button onClick={() => onComponentChange(ComponentA)}>Show Component A</button>
      <button onClick={() => onComponentChange(ComponentB)}>Show Component B</button>
      <button onClick={() => onComponentChange(ComponentC)}>Show Component C</button>
    </div>
  );
};

export default Tray;

// ComponentA.js
const ComponentA = () => {
  return (
    <div>
      <h1>Component A</h1>
      <p>This is Component A.</p>
    </div>
  );
};

export default ComponentA;

// ComponentB.js
const ComponentB = () => {
  return (
    <div>
      <h1>Component B</h1>
      <p>This is Component B.</p>
    </div>
  );
};

export default ComponentB;

// ComponentC.js
const ComponentC = () => {
  return (
    <div>
      <h1>Component C</h1>
      <p>This is Component C.</p>
    </div>
  );
};

export default ComponentC;