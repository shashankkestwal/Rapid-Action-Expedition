import location_image from "./location_heading.jpg"
import "./location.css"
const location = (props) => {
  return (
          <div id="location">
            <img src={location_image} alt="location image" />
            <div id="location_images"> 
            </div>
          </div>
          )
}

export default location