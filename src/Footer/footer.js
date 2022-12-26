import "./footer.css"
import w_icon from "./whatsapp_icon.svg"
import pentart_logo from "../assets/pentart_logo.jpg"
const footer = (props) => {
  return(
          <div className="flex" id="footer">
            <div className="flex col footer-div">
              Made with ❤️ by
                <img src={pentart_logo} id="logo"></img>
              <span id="s_text">from the mountains of Himalayas.</span>
              </div>
            <div className="flex col footer-div">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="flex col footer-div">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="flex col footer-div">
              <ul>
                <li><img id="whatsapp_icon" src={w_icon} />+91 6398 669 195</li>
                <li>info@yogsidhi.com</li>
                <li></li>
                <li><p id="copyright">Copyright RapidActionExpedition © 2021. All rights reserved.</p></li>
              </ul>

            </div>
          </div>
        )
}

export default footer