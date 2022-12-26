import "./activities.css"
import activities_text_image from "./activities_heading.jpg"
import styling_background from "../assets/styling_background.jpg"
import img5 from "../assets/img5.jpg"
import ActivityCard from "./activity_card.js"
const activities = (props) => {
  return(
      <div id="activities_section">
        <img src={activities_text_image}/>  
        <img id="a_style" src={styling_background}/>
        <div id="a_C">
          <p id="activity_description" style={{paddingLeft: "10px"}}>These courses are to provide you in depth knowledge of how choosing the yogic practices. </p>
          <div id="activities_card_continer">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div> 
        </div>
      </div>
        )
}

export default activities;