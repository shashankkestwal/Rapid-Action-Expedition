// import React from "react"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./activities.css"
import activities_text_image from "../assets/activities_heading.svg"
import styling_background from "../assets/styling_background.jpg"
import rafting_image1 from "../assets/activities_images/rafting_image1.jpg"
import img1 from "../assets/activities_images/img1.jpg"
import img2 from "../assets/activities_images/img2.jpg"
import img3 from "../assets/activities_images/img3.jpg"
import normalCamp from "../assets/activities_images/normalCamp.jpg"
import luxuryCamp from "../assets/activities_images/luxuryCamp.jpg"
import riverside_camp from "../assets/activities_images/riverside_camp.jpeg"
import homestay from "../assets/activities_images/homestay.jpeg"
import ActivityCard from "./activity_card.js"

const activity_card_data = [{
                              image : riverside_camp,
                              activity : "Riverside Camp", 
                              price: "1200"
                            }, {
                              image : luxuryCamp,
                              activity : "Luxury Camp", 
                              price: "1600"
                            },{
                              image : homestay,
                              activity : "Homestay in Shivpuri", 
                              price: "1000 onwards"
                            },{
                              image : rafting_image1,
                              activity : "Rafting from Bhrampuri to Ram jhoola | 10 Kms | 2 hrs", 
                              price: "600"
                            },
                            {
                              image : img2,
                              activity : "Rafting from Marine Drive to Shivpuri | 12Kms | 2 hrs", 
                              price: "600"
                            },{
                              image : img3,
                              activity : "Rafting from shivpuri to nim beach | 16Kms | 2.5 hrs", 
                              price: "800"
                            },{
                              image : img1,
                              activity : "Rafting from marine drive to Nim Beach | 26Kms | 4.5 -5 hrs", 
                              price: "1400"
                            },
                            {
                              image : img2,
                              activity : "Riverside Camping & rafting package", 
                              price: "1800 onwards"
                            },{
                              image : luxuryCamp,
                              activity : "Luxury camping & rafting package", 
                              price: "2000 onwards"
                            }
                            ]

const Activities = (props) => {

  return(
      <div id="activities_section">
        <div id="activity_text">
          <img src={activities_text_image}/>  
        </div>
        <img id="a_style" src={styling_background}/>
        <div id="a_C">
          <p id="activity_description">Explore the activities and packages provided by rapidactionexpedition in rishikesh. We are open for all adventurers who want to spend some quality time at this place. </p>
          <div id="activities_card_continer">
          {activity_card_data.map((card_data) =>{
            return <ActivityCard image={card_data.image} activity={card_data.activity} price={card_data.price} />            
          } )}
          </div> 
        </div>
      </div>
        )
}

export default Activities;
