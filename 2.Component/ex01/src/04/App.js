import React from 'react'
import MyComponent from './MyComponent';

const App = () => {
  return(
  <div id="App">
    <MyComponent 
      // props01={''}
      props02={100}
      props03={true}/>
  </div>
  ); 
}
export default App