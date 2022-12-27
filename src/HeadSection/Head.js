import './header.css'
import rafting_image from "../assets/rafting.png"
import RadidExpedition from "../assets/rapid_expedition.svg"

const Head = (props) => {
  return (<div id="head">
            <img src={rafting_image}/>
          </div>)
}

export default Head;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Header name="Sara" />;
// root.render(element);