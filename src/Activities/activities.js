// import React from "react"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./activities.css"
import activities_text_image from "../assets/activities_heading.jpg"
import styling_background from "../assets/styling_background.jpg"

import ActivityCard from "./activity_card.js"

// const activity_card_data = [{
//                               image : img1,
//                               activity : "Camping in Shivpuri", 
//                               price: "1500"
//                             }, {
//                               image : img2,
//                               activity : "Rafitng 12Km", 
//                               price: "600"
//                             },{
//                               image : img3,
//                               activity : "Camping and Rafting Package", 
//                               price: "1800"
//                             },{
//                               image : img1,
//                               activity : "Camping in Shivpuri", 
//                               price: "1500"
//                             },{
//                               image : img2,
//                               activity : "Rafitng 12Km", 
//                               price: "600"
//                             },{
//                               image : img3,
//                               activity : "Camping and Rafting Package", 
//                               price: "1800"
//                             },{
//                               image : img1,
//                               activity : "Camping in Shivpuri", 
//                               price: "1500"
//                             },{
//                               image : img2,
//                               activity : "Rafitng 12Km", 
//                               price: "600"
//                             },{
//                               image : img3,
//                               activity : "Camping and Rafting Package", 
//                               price: "1800"
//                             }
//   ]




const Activities = (props) => {
  const [activity_card_data, set_card_data] = useState([])


  useEffect(() => {
    axios
      .get(`${window.location.origin.toString()}` + "/data.json")
      .then((res) => {
        set_card_data(res.data)
      })
  })

  return(
      <div id="activities_section">
        <div id="activity_text">
          <img src={activities_text_image}/>  
        </div>
        <img id="a_style" src={styling_background}/>
        <div id="a_C">
          <p id="activity_description" style={{paddingLeft: "10px"}}>These courses are to provide you in depth knowledge of how choosing the yogic practices. </p>
          <div id="activities_card_continer">
          {activity_card_data.map((card_data) =>{
            return <ActivityCard image={card_data.image} activity={card_data.activity} price={card_data.price} />            
          } )}

            {/*<ActivityCard activity="Camping in Shivpuri" price="1500" />
            <ActivityCard activity="Rafting 12 Km" price="600"/>
            <ActivityCard activity="Camping and Rafting Package" price="1800"/>
            <ActivityCard activity="Camping in Shivpuri" price="1500"/>
            <ActivityCard activity="Rafting 12 Km" price="600"/>
            <ActivityCard activity="Camping and Rafting Package" price="1800"/>
            <ActivityCard activity="Camping in Shivpuri" price="1500" />
            <ActivityCard activity="Rafting 12 Km" price="600"/>
            <ActivityCard activity="Camping and Rafting Package" price="1800"/>*/}
          </div> 
        </div>
      </div>
        )
}

export default Activities;