import location_image from "./location_heading.jpg"
import image from "../assets/img1.jpg"
import LocationDetails from "./location_details.js"
import "./location.css"
const location = (props) => {
  return (
        <div id="location_container">
          <div id="location">
            <img src={location_image} alt="location image" />
            <div id="location_images"> 
              <div >
                <img  src={image}/>
              </div>
              <div>
                <img  src={image}/>
              </div>
              <div>
                <img  src={image}/>
              </div>
            </div>
            <LocationDetails />

          </div>
        </div>
          )
}

export default location