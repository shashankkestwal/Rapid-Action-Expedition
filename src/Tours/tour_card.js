import tour_image from "../assets/rope_sliding.jpg"
const tour_card = (props) => {
  return(
         <div>
            <img src= {props.image} />
            <p className="tour_head">{props.tour_data}</p>
            <p>Starts From <span id="tour_price">INR{props.tour_price}</span> </p>
          </div>
        )
}

tour_card.defaultProps = {
  image: tour_image,
  tour_data : "XYZ Tour",
  tour_price : 1200 
}

export default tour_card