import location_text from "../assets/location_heading.jpg"

import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img6 from "../assets/img6.jpg"

import LocationDetails from "./location_details.js"
import "./location.css"

const images_count = 3;

const images_url = [img3, img2, img6]


const lat_long = {
  "lat": 30.1278789008889,
  "lng": 78.31870900569932
}
const location = (props) => {
  return (
        <div id="location_container">
          <div id="location">
            <img id="location_text" src={location_text} alt="location image" />
            <div id="location_images"> 
              {Array.from(Array(3), (e, i) => {
                return<div >
                         <img src={images_url[i]}/>
                      </div>
              })}
              {/*<div >
                <img  src={image}/>
              </div>
              <div>
                <img  src={image}/>
              </div>
              <div>
                <img  src={image}/>
              </div>*/}
            </div>
            <LocationDetails />
          </div>
        </div>
          )
}

export default location