import image from "../assets/img5.png"
// import img1 from "../assets/img2.jpg"
// import img2 from "../assets/img3.jpg"
// import img3 from "../assets/img6.jpg"

import "./activity_card.css"
const activity_card = (props) => { 
  return(
          <div id="activity_card">
          <div>
            <img style={{width:"300px", height:"200px", borderRadius:"10px"}} src = {props.image}></img>
            <p id="activity"> {props.activity }</p>
            <p id="price"> <span id="number">{props.price}</span>/Person </p>
          </div>
          </div>
        )
}

activity_card.defaultProps = {
  image : image,
  activity : "Activity Prop", 
  price: "999"
}

export default activity_card
