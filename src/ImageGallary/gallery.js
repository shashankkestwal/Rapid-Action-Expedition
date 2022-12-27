import "./gallery.css"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.png"
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {gallery_images} from '../data';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  img4,
  img1,
  img3, 
  img4
];

export default class gallery extends Component {
  constructor(props) {
    super(props);
    console.log(gallery_images);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div id="image-container">
          <div className="image" id="img1">
            <img src={img1} alt="Mountian image" />
          </div>
          <div className="image" id="img2">
            <img src={img2} alt="Camp image" />
          </div>
          <div className="image" id="img3">
            <img src={img4} alt="Camp image" />
          </div>
          <div className="image last" id="img4" onClick={() => this.setState({ isOpen: true })}>
            <img src={img5} alt="Camp image" />
            <div id="more">View More+</div>
          </div>

        {isOpen && (
          <div className = "lightbox">
          <Lightbox
            mainSrc={images[photoIndex]}
            style={{ flex: 1}}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            
          />
          </div>
        )}
      </div>
    );
  }
}











