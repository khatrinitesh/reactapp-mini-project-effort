import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function One() {
    const fadeImages = [
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg",
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg",
        "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
      ];

  return (
    <div>
        <h2>Fade Effect</h2>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img className="img-fluid" src={fadeImages[0]} />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img className="img-fluid" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="img-fluid" src={fadeImages[2]} />
            </div>
            <p>Third Slide</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}
