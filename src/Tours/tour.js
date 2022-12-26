import "./tour.css"
import tour_text from "./tours_heading.jpg"
import tour_image from "../assets/rope_sliding.jpg"
import TourCard from "./tour_card.js"

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
      </div>
        )
}

export default tours;