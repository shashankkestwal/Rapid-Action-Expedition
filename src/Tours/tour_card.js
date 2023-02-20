import tour_image1 from "../assets/tour_images/tour_image1.jpg"
import tour_image2 from "../assets/tour_images/tour_image2.jpg"
import tour_image3 from "../assets/tour_images/tour_image3.jpg"
import tour_image4 from "../assets/tour_images/tour_image4.jpg"

const tour_card = (props) => {
  return(
         <div className="tour_card">
            <img id="tour_img"src= {props.image} />
            <p className="tour_head">{props.tour_data}</p>
            {/*<p>Starts From <span id="tour_price">INR{props.tour_price}</span> </p>*/}
          </div>
        )
}

tour_card.defaultProps = {
  image: tour_image1,
  tour_data : "XYZ Tour",
  tour_price : 2000 
}

export default tour_card