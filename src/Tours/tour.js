import "./tour.css"
import tour_text from "../assets/tours_heading.jpg"
import tour_image from "../assets/rope_sliding.jpg"
import TourCard from "./tour_card.js"
import Button from "../Button/button.js"

const tours = () => {
  return(
      <div className="flex col tour">
        <img src={tour_text} />
        <div id="tours_continer">
          <TourCard tour_data="Adventure Tour" />
          <TourCard tour_data="Wildlife Tour" />
          <TourCard tour_data="Bike Tour" />
          <TourCard tour_data="Tour Packages" />
        </div>
        <div className="tour_contact">
          <Button data="Contact to Know More"/>  
        </div>
      </div>
        )
}

export default tours;