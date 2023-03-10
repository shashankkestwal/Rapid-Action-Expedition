import "./location_details.css"
import style_image from "../assets/styling_next.svg"
import styling_background from "../assets/styling_background.jpg"
import map_image from "../assets/map_image.jpg"
import mobile_map_img from "../assets/mobile_map_img.svg"

const url = "https://www.google.com/maps/place/Rapid+Action+Expedition/@30.127583,78.3182468,20.18z/data=!4m10!1m2!2m1!1srapid+action+expedition,+shivpuri,+badrinath+road,+near+rishikesh,+uttarakhand+himalayas!3m6!1s0x390916471c943d3b:0x2ee7b6de74be9ba1!8m2!3d30.127538!4d78.318501!15sClhyYXBpZCBhY3Rpb24gZXhwZWRpdGlvbiwgc2hpdnB1cmksIGJhZHJpbmF0aCByb2FkLCBuZWFyIHJpc2hpa2VzaCwgdXR0YXJha2hhbmQgaGltYWxheWFzkgENdHJhdmVsX2FnZW5jeeABAA!16s%2Fg%2F11dzd08m84"
const gotoLocationUrl = () => {
  window.open(url, '_blank');
}

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
              
              <div>
                <img className="map_image" src={map_image} alt="map image"/>
                <img className="mobile_map_image" src={mobile_map_img} alt="map image" />
                <button id="map_button" onClick={gotoLocationUrl}>View Map</button>
              </div>
            </div>
            <img id="style" src={styling_background} alt="styling image" />
          </div>
        </div>
        )

}

export default location_details