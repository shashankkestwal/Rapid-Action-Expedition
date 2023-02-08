import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


import "./footer.css"
import w_icon from "../assets/whatsapp_icon.svg"
import pentart_logo from "../assets/pentartstudio_logo.svg"
import mail_icon from "../assets/mail_icon.svg"
import footer_copy_icon from "../assets/footer_copy_icon.svg"

const copyToClipboard = () => {
  navigator.clipboard.writeText("info@rapidactionexpedition.com");
  console.log("copied")
} 

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
                <li><Link to="/About">About Us</Link></li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex col footer-div">
              <ul>
                <li>Camping and Rafting</li>
                <li>Adventure Tours</li>
                <li>Wildlife Tours</li>
                <li>Bike Tours</li>
              </ul>
            </div>
            <div className="flex col footer-div">
              <ul>
                <li>
                  <img className="footer_icon" src={w_icon} />
                  +91 94111 91687
                </li>
                <li onClick={copyToClipboard}>
                  <img className="footer_icon"  src={mail_icon} />
                  <p className="business_email">info@rapidactionexpedition.com </p>
                  <img  src={footer_copy_icon} />
                </li>
                <li></li>
                <li><p id="copyright">Copyright RapidActionExpedition © 2021. All rights reserved.</p></li>
              </ul>

            </div>
          </div>
        )
}

export default footer