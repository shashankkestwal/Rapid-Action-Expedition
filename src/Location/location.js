import location_text from "../assets/location_heading.svg"

import img2 from "../assets/location/img2.jpg"
import img3 from "../assets/location/img3.jpg"
import img6 from "../assets/location/img6.jpg"

import LocationDetails from "./location_details.js"
import "./location.css"

const images_count = 3;

const images_url = [img2, img3, img6]


const lat_long = {
  "lat": 30.1278789008889,
  "lng": 78.31870900569932
}
const location = (props) => {
  return (
        <div id="location_container">
          <div id="flex location">
            <img id="location_text" src={location_text} alt="location image" />
            <div id="location_images"> 
              {Array.from(Array(3), (e, i) => {
                return<div >
                         <img src={images_url[i]}/>
                      </div>
              })}
            </div>
            <LocationDetails />
          </div>
        </div>
          )
}

export default location