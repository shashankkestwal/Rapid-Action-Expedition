import './header.css'
import rafting_image from "./rafting.png"
// import React from 'react';
// import EstablishDate from './estd.svg'
import RadidExpedition from './rapid_expedition.svg'
// import FeatureText from './features.svg'

const Head = (props) => {
  return (<div id="head">
            <img src={rafting_image}/>
          </div>)
}

export default Head;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Header name="Sara" />;
// root.render(element);