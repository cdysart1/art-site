import React from 'react';

const images = ["images/GranEsquina2.jpg", "images/interior.jpg", "images/Shapes.jpg",  "images/Venice.jpg", "images/NYC.jpg" ]

const Cityscapes = () => {
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

export default Cityscapes;
