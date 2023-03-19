import "./gallery.css"
import img1 from "../assets/gallery_images/img1.jpg"
import img2 from "../assets/gallery_images/img2.jpg"
import img4 from "../assets/gallery_images/img4.jpg"
import img5 from "../assets/gallery_images/img5.jpg"
import img6 from "../assets/gallery_images/img6.jpg"
import img8 from "../assets/gallery_images/img8.jpg"
import img9 from "../assets/gallery_images/img9.jpg"
import img10 from "../assets/gallery_images/img10.jpg"
import img11 from "../assets/gallery_images/img11.jpg"
import img12 from "../assets/gallery_images/img12.jpg"
import img13 from "../assets/gallery_images/img13.jpg"
import img14 from "../assets/gallery_images/img14.jpg"
import img15 from "../assets/gallery_images/img15.jpg"
import img16 from "../assets/gallery_images/img16.jpg"
import img17 from "../assets/gallery_images/img17.jpg"
import img18 from "../assets/gallery_images/img18.jpg"
import img19 from "../assets/gallery_images/img19.jpg"
import img20 from "../assets/gallery_images/img20.jpg"
import img21 from "../assets/gallery_images/img21.jpg"
import img22 from "../assets/gallery_images/img22.jpg"



import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {gallery_images} from '../data';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  img5,
  img2,
  img4,
  img6,
  img8,
  img9,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
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
            <img src={img6} alt="Mountian image" />
          </div>
          <div className="image" id="img2">
            <img src={img2} alt="Camp image" />
          </div>
          <div className="image" id="img3">
            <img src={img4} alt="Camp image" />
          </div>
          <div className="image last" id="img4" onClick={() => this.setState({ isOpen: true })}>
            <img src={img5} alt="Camp image" />
            <div id="more">View More</div>
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











