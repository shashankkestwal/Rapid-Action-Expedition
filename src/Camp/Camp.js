import './camp.css'
import TheCamp from "../assets/camp.svg"
import ImageGallery from "../ImageGallary/gallery.js"
import Paragraph from "./paragraph.js"
import Button from "../Button/button.js"

let details = "The Camp Site is loacted at Shivpuri, one of the prime rafting start point. It is surrounded by mountains & a small water body The Cam Site is loacted at Shivpuri, one of the prime rafting start point. It is surrounded by mountains & a small water body. The Cam Site is loacted at Shivpuri, one of the prime rafting start point. It is surrounded by mountains & a small water body The Cam Site is loacted at Shivpuri, one of the prime rafting start point. It is surrounded by mountains & a small water body."

// import image1 from "../assets/image1.svg"
const Camp = (props) => {
  return (<div id="camp">
            <img id="camp-img" src={TheCamp} alt="The Camp" />
            <ImageGallery />
            <Paragraph data={details}/>
            <Button/>
          </div>)
}

export default Camp;
