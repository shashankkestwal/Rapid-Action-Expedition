import style_image from "../assets/styling_next.svg"
import "./button.css"

const Wapp_link = "https://wa.me/9411191687"
const openWhatsapp = () => {
  window.open(Wapp_link, "_blank")
}

const button = (props)=>{
  return (
            <div className="flex button-container">
              <img  className="style_img"src={style_image} alt="styling image" / >
              <button onClick={openWhatsapp} href="https://wa.me/9411191687" id="contact_button">{props.data}</button>
              <img id="first" className="style_img" src={style_image} alt="styling image" / >
            </div>

         )
}

button.defaultProps = {
  data : "Contact US !"
}
export default button