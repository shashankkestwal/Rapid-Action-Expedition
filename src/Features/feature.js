import feature_text from "../assets/features_heading.svg"
import FeatureComponent from "./feature_component.js"
import tent from "../assets/tents_icon.svg"
import food from "../assets/food_icon.svg"
import pool from "../assets/pool_icon.svg"
import washroom from "../assets/washroom_icon.svg"
import sports from "../assets/sports_icon.svg"

import "./feature.css"

const feature_details = [{
                          image : tent,
                          feature_text: "Tent",
                          feature_data : "Triple sharing tents"
                        },{
                          image : food,
                          feature_text: "Food",
                          feature_data : "3 times meals are served" 
                        },{
                          image : pool,
                          feature_text: "Pool",
                          feature_data : "Pool in the camp availiable"  
                        },{
                          image : washroom,
                          feature_text: "Washroom",
                          feature_data : "Attached washroom in every tent"  
                        },{
                           image : sports,
                          feature_text: "Sports",
                          feature_data : "Playarea available for outdoor sports"

                        }]

const features = (props) => {
  return (
            <div id="features">
              <img id="feature_text" src={feature_text} alt="features"></img>
              <div id="feature_container">
                {feature_details.map((detail)=>{
                  return <FeatureComponent image={detail.image} feature_text={detail.feature_text} feature_data={detail.feature_data} />
                })}
              </div>
            </div>
          )
}

export default features