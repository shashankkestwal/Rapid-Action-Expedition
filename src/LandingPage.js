import './App.css';
import RadidExpedition from './assets/rapid_expedition.svg'

import Head from './HeadSection/Head.js'
import Camp from './Camp/Camp.js'
import Feature from "./Features/feature.js"
import Location from "./Location/location.js" 
import Activities from "./Activities/activities.js"
import Tour from "./Tours/tour.js"
import Button from "./Button/button.js"
import Footer from "./Footer/footer.js"

const landing_page = () => {
  return (
      <div className="App">
        <Head />
        <div id="align"></div>
        <img className='headerImage' id="expedition" alt= "Rapid expedition details"  src={RadidExpedition} ></img>
        <div id="more_up">
          <Camp />
          <Feature />
          <Location />
          <Activities />
          <Tour />
          <Button data="Contact to Know More"/>  
                  
        </div> 
      </div>
    );
}
export default landing_page;