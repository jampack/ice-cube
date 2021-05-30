import React from 'react';
import iceCubeLogo from './assets/images/ice-cube.png'
import { HelloWorld } from 'ice-cube';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <img src={iceCubeLogo} alt='ice-cube-logo' style={{width: '100px'}} />
          <HelloWorld />
        </div>
      </div>
    </div>
  );
}

export default App;
