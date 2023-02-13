// import React from "react"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./activities.css"
import activities_text_image from "../assets/activities_heading.svg"
import styling_background from "../assets/styling_background.jpg"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import normalCamp from "../assets/normalCamp.jpeg"
import luxaryCamp from "../assets/luxaryCamp.jpeg"
import ActivityCard from "./activity_card.js"

const activity_card_data = [{
                              image : normalCamp,
                              activity : "Standard Camp", 
                              price: "1200"
                            }, {
                              image : luxaryCamp,
                              activity : "Luxary Camp", 
                              price: "1600"
                            },{
                              image : img3,
                              activity : "Rafting 12Km", 
                              price: "600"
                            },{
                              image : img2,
                              activity : "Rafting 26Km", 
                              price: "1200"
                            },{
                              image : img3,
                              activity : "Rafting 32km", 
                              price: "XXX"
                            },{
                              image : normalCamp,
                              activity : "Standard camping and one trip Rafting", 
                              price: "1600"
                            },{
                              image : luxaryCamp,
                              activity : "Luxary camping and one trip Rafting", 
                              price: "2200"
                            }]

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
