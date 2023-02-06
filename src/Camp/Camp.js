import './camp.css'
import TheCamp from "../assets/camp.svg"
import ImageGallery from "../ImageGallary/gallery.js"
import Paragraph from "./paragraph.js"
import Button from "../Button/button.js"

let details = "The Camp Site is located at Shivpuri, one of the prime rafting start point. It is surrounded by mountains and a river flowing through its middle. The camp site is surrounded by beautiful greenery and mountains which makes it an ideal place to relax after a long day's drive."

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
