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


const Wapp_link = "https://wa.me/919411191687"

const copyToClipboard = () => {
  navigator.clipboard.writeText("rapid_action@hotmail.com");
  console.log("copied")
  copyURL()
} 

const openWhattsapp = () => {
  window.open(Wapp_link, "_blank")
}

const copyURL = () => {
  const copyDiv = document.querySelector(".copyAlert")
  copyDiv.textContent = "Mail copied to clipboard!";
  copyDiv.style.animationName = "disappear";
  copyDiv.style.animationDuration = "2s"; 
  setTimeout(function(){ 
  copyDiv.style.animationName = "none"; 
  }, 2000);
};

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
                <li onClick= {openWhattsapp}>
                  <img className="footer_icon" src={w_icon} />
                  +91 94111 91687
                </li>
                <li onClick={copyToClipboard}>
                  <p className="copyAlert">  </p>
                  <img className="footer_icon"  src={mail_icon} />
                  <p className="business_email">rapid_action@hotmail.com</p>
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