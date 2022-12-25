import "./location_details.css"
import style_image from "../assets/styling_next.svg"
import styling_background from "./styling_background.jpg"
import map_image from "./map_image.jpg"

const location_details = () => {
  return(
        <div id="location_details" > 
          <img id="style_image" src={style_image} alt="arrow image" />
          <div id="location_card_container">
            <div id="location_card">
              <div>
                <p className ="text" id="l_heading">RapidActionExpedition, Shivpuri, Badrinath Road, Near Rishikesh, Uttarakhand Himalayas (INDIA)</p>
                <p className ="text" id="l_data">Shivpuri, located in the Shivalik Range of mountains and 16km from Rishikesh, is a small village famous for its adventure tourism and scenic backdrop. The major attraction of this village is the Ganga River, in which water sports like rafting and kayaking are operated.</p>
              </div>
              
              <div id="map_button">
                <img src={map_image} alt="map image"/>
                <button>View Map</button>
              </div>
            </div>
            <img id="style" src={styling_background} alt="styling image" />
          </div>
        </div>
        )

}

export default location_details