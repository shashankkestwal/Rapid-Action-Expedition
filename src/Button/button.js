import style_image from "../assets/styling_next.svg"
import "./button.css"

const button = (props)=>{
  return (
          <div className="flex">
            <div className="button-container">
              <img  className="style_img"src={style_image} alt="styling image" / >
              <button id="contact_button">{props.data}</button>
              <img id="first" className="style_img"src={style_image} alt="styling image" / >
            </div>
          </div>
         )
}

button.defaultProps = {
  data : "Contact US !"
}
export default button