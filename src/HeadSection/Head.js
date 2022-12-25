import './header.css'
// import React from 'react';
// import EstablishDate from './estd.svg'
import RadidExpedition from './rapid_expedition.svg'
// import FeatureText from './features.svg'

const Head = (props) => {
  return (<div id="head">
            <img className='headerImage' id="expedition" alt= "Rapid expedition details"  src={RadidExpedition} ></img>
        </div>)
}

export default Head;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Header name="Sara" />;
// root.render(element);