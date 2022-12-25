import feature_text from "./features_heading.svg"
import FeatureComponent from "./feature_component.js"
import "./feature.css"

const features = (props) => {
  return (
            <div id="features">
              <img src={feature_text} alt="features"></img>
              <div id="feature_container">
                <FeatureComponent />
                <FeatureComponent />
                <FeatureComponent />
                <FeatureComponent />
                <FeatureComponent />
              </div>
            </div>
          )
}

export default features