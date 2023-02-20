import "./tour.css"
import tour_text from "../assets/tours_heading.jpg"
import tour_image from "../assets/rope_sliding.jpg"
import TourCard from "./tour_card.js"
import Button from "../Button/button.js"


import tour_image1 from "../assets/tour_images/tour_image1.jpg"
import tour_image2 from "../assets/tour_images/tour_image2.jpg"
import tour_image3 from "../assets/tour_images/tour_image3.jpg"
import tour_image4 from "../assets/tour_images/tour_image4.jpg"


const tours = () => {
  return(
      <div className="flex col tour">
        <img src={tour_text} />
        <div id="tours_continer">
          <TourCard image={tour_image1} tour_data="Adventure Tour" />
          <TourCard image={tour_image2} tour_data="Wildlife Tour" />
          <TourCard image={tour_image3} tour_data="Bike Tour" />
          <TourCard image={tour_image4} tour_data="Tour Packages" />
        </div>
        <div className="tour_contact">
          <Button data="Contact to Know More"/>  
        </div>
      </div>
        )
}

export default tours;