import tents from "../assets/tents_icon.svg"
import "./feature_component.css"

const feature_component = (props) => {
  return (
          <div id="feature_component">
            <img className="feature_icon" src={props.image} alt="tent"></img>
            <p id="feature_head">{props.feature_text}</p>
            <p id="feature_data">{props.feature_data}</p>
          </div>
        )
}

feature_component.defaultProps = {
  image : tents,
  feature_text: "tent",
  feature_data: "lorem ipsum text "
}

export default feature_component