import React from 'react';

const images = ["images/ABarn2.jpg", "images/LeoCastillo.jpg", "images/daffodils.jpg",  "images/OceanShades.jpg",  "images/WestCoast.jpg",  "images/Garden.jpg", "images/dustyHike.jpg", "images/DreamWorld.jpg", "images/SantaMonica.jpg" ]

const Landscapes = () => {
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

export default Landscapes;
