import './App.css';

import Head from './HeadSection/Head.js'
import Camp from './Camp/Camp.js'
import Feature from "./Features/feature.js"
import Location from "./Location/location.js" 
function App() {
  return (
    <div className="App">
      <Head />
      <div id="more_up">
        <Camp />
        <Feature />
        <Location />
        

      </div>
      
    </div>
  );
}

export default App;
