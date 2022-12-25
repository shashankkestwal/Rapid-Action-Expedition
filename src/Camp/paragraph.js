import "./paragraph.css"
const paragraph = (props) => {
  return (<div>
            <p id="paragraph">
              {props.data}
            </p>
          </div>
          )

}

paragraph.defaultProps = {
  data: "Lorem ipsum data Here that must be sent via a prop this is a default prop"
  
}

export default paragraph;