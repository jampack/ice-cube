import React, {useState} from 'react';
import {  Button, Checkbox, CheckboxGroup } from 'ice-cube/components';


function App() {

  const [checkbox, setCheckbox] = useState(true)
  const [checkboxGroup, setCheckboxGroup] = useState([])
  const checkboxItems = [{id: 1, name: 'item1 1122 3344 5566'},{id: 2, name: 'item2'},{id: 3, name: 'item3'}]

  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <CheckboxGroup data={checkboxItems} value={checkboxGroup} onChange={(r) => setCheckboxGroup([...r])}/>
          </div>

          <hr style={{margin: '10px'}}/>
          <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>One</Checkbox>
          <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>One</Checkbox>
          <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>One</Checkbox>
          <Checkbox value={checkbox} onChange={(r) => setCheckbox(r)}>One</Checkbox>

          {/*<hr style={{margin: '10px'}}/>*/}
          {/*/!*<img src={iceCubeLogo} alt='ice-cube-logo' style={{width: '100px'}} />*!/*/}
          {/*<Button size='xs'>xs</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button size='sm'>sm</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button>de</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button size='lg'>lg</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button size='xl'>xl</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<hr style={{margin: '10px'}}/>*/}

          {/*<Button raised icon><span className='fas fa-heart fa-lg'/></Button>*/}
          <hr style={{margin: '10px'}}/>
          <Button icon fab color='red' size='xs'><span className='fas fa-heart'/></Button>
          <Button icon fab color='red' size='sm'><span className='fas fa-heart'/></Button>
          <Button icon fab color='red'><span className='fas fa-heart'/></Button>
          <Button icon fab color='red' size='lg'><span className='fas fa-heart'/></Button>
          <Button icon fab color='red' size='xl'><span className='fas fa-heart'/></Button>
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button raised variant='info' bordered >large text to test the button functionality</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button>Default</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='primary'>Primary</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='secondary'>Secondary</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='success'>Success</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='error'>Error</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='warning'>Warning</Button>*/}
          {/*<hr style={{margin: '10px'}}/>*/}
          {/*<Button variant='info'>Info</Button>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
