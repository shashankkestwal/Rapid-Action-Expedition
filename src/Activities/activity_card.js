import image from "../assets/img5.png"
import "./activity_card.css"
const activity_card = (props) => { 
  return(
          <div id="activity_card">
            <img style={{width:"300px", height:"200px", borderRadius:"10px"}} src = {props.image}></img>
            <p id="activity"> {props.activity }</p>
            <p id="price"> <span id="number">{props.price}</span>/Person </p>
          </div>
        )
}

activity_card.defaultProps = {
  image : image,
  activity : "Activity Prop", 
  price: "999 "
}

export default activity_card
