import React from 'react';

const images = ["images/pensiveLady.jpg", "images/SeatedLady.jpg", "images/Farmer.jpg", "images/theBeach.jpg", "images/whitelady.jpg", "images/LibraryLady.jpg" ]

const Figures = () => {
  return (
    <div className="images">{images.map((image, idx) => {
        return (
          <div className="image" key={idx}>
          <img src={image} />
          </div>
        )
      })}
    </div>
  )
}

export default Figures;
