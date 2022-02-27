import React from 'react';
import Hero from '../Hero'
// import coverImage from '../../assets/cover/cover-image.jpg';



const WhatDo = (props) => {



  return (
    <>
      <Hero></Hero>
      <section className="my-5 px-3 section-top">
        <h3 className="section-title">I code for P<sup>3</sup></h3>
        <h4>Planet<span className="dot"></span>People<span className="dot"></span>Pets
        </h4>
        <div className="my-2">
          <p className='pb-4'>
            I make the planet a better place for people and pets by building community. Increasingly, community is built online. I am your partner in your  development process, bringing your website designs - your community - to life.  Coding to increase your clicks, coding to increase your sales, and coding so you spend your time focusing on your mission. <br /> Together - we save the world. One website at a time.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhatDo