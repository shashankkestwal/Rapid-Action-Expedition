import "./gallery.css"
import img1 from "../assets/gallery_images/img1.png"
import img2 from "../assets/gallery_images/img2.png"
import img4 from "../assets/gallery_images/img4.png"
import img5 from "../assets/gallery_images/img5.png"
import img6 from "../assets/gallery_images/img6.png"
import img8 from "../assets/gallery_images/img8.png"
import img9 from "../assets/gallery_images/img9.png"
import img10 from "../assets/gallery_images/img10.png"
import img11 from "../assets/gallery_images/img11.png"
import img12 from "../assets/gallery_images/img12.png"
import img13 from "../assets/gallery_images/img13.png"
import img14 from "../assets/gallery_images/img14.png"
import img15 from "../assets/gallery_images/img15.png"
import img16 from "../assets/gallery_images/img16.png"


import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {gallery_images} from '../data';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16
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











