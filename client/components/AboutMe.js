import React from 'react';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="header">about the artist</div>
      <div className="flex">
        <div className="photo">
          <img src="/personal/hawaii2.jpg" />
        </div>
        <div className="paragraph">
          <p>I grew up in New York and began drawing when I was eight years old.  A couple years later, I used acrylics for the first time while at summer camp.  Somewhere between the swimming pool and the endless card games, I discovered a real love for painting.
          <br /><br />
            I spent many years focusing on figurative works, but have found myself inspired by the natural landscapes of Southern California ever since I moved here several years ago.  I use a variety of mediums - namely oils, acrylics, and gouache. And while my periods of creativity ebb and flow depending on the season in my life, creating art will always be a core feature of who I am as a person.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
