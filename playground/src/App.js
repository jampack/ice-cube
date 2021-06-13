import React from 'react';
import {  Button } from 'ice-cube/components';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          {/*<img src={iceCubeLogo} alt='ice-cube-logo' style={{width: '100px'}} />*/}
          <Button size='xs'>extra small</Button>
          <hr style={{margin: '10px'}}/>
          <Button size='sm'>small</Button>
          <hr style={{margin: '10px'}}/>
          <Button>default</Button>
          <hr style={{margin: '10px'}}/>
          <Button size='lg'>large</Button>
          <hr style={{margin: '10px'}}/>
          <Button size='xl'>extra large</Button>
          <hr style={{margin: '10px'}}/>
          <hr style={{margin: '10px'}}/>
          <hr style={{margin: '10px'}}/>
          <hr style={{margin: '10px'}}/>
          <hr style={{margin: '10px'}}/>
          <hr style={{margin: '10px'}}/>

          <Button raised icon><span className='fas fa-heart fa-lg'/></Button>
          <hr style={{margin: '10px'}}/>
          <Button icon fab color='red'><span className='fas fa-heart'/></Button>
          <hr style={{margin: '10px'}}/>
          <Button raised variant='info' bordered >large text to test the button functionality</Button>
          <hr style={{margin: '10px'}}/>
          <Button>Default</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='primary'>Primary</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='secondary'>Secondary</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='success'>Success</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='error'>Error</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='warning'>Warning</Button>
          <hr style={{margin: '10px'}}/>
          <Button variant='info'>Info</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
