import React from "react"

// Import images

import logo from "./assets/rea_logo.svg";
import whats_app_btn from "./assets/whatsapp_btn.svg";
// import user_icon from "../assets/images/home-page-images/noun_User_2328155"

export default function TopNavigation(){
  return <div class="top-navigation-bar">
      {/*// Logo*/}
      
      <a className="logo-box" href="/">
          <img  className="logo" src={logo}/>
      </a>
      
      {/*<!-- Primary Nav  -->*/}
      
      <nav>
          <div className="nav-group">
            <a href="/">Home</a>
            <a href="/About">About</a>
            {/*<a href="/contact">Contact</a>*/}
          </div>

          <div className="nav-group">
            <a aria-label="Contact Us" href="https://wa.me/9411191687?text=hi" className="whatsapp-button"> <img  alt="Chat on WhatsApp" src={whats_app_btn} />94111 91687</a>
          </div>
      </nav>

  </div>

}