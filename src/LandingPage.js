import './App.css';
import RadidExpedition from './assets/rapid_expedition.svg'
import TopNavigation from './DesktopNavigationBar.js'

import Head from './HeadSection/Head.js'
import Camp from './Camp/Camp.js'
import Feature from "./Features/feature.js"
import Location from "./Location/location.js" 
import Activities from "./Activities/activities.js"
import Tour from "./Tours/tour.js"
import Footer from "./Footer/footer.js"

const landing_page = () => {
  return (
      <div className="App">
      <TopNavigation />
        <Head />
        <div id="content">
          <img className='headerImage' id="expedition" alt= "Rapid expedition details"  src={RadidExpedition} ></img>
          <Camp />
          <Feature />
          <Location />
          <Activities />
          <Tour />
                
        </div> 
      </div>
    );
}
export default landing_page;