import React from 'react';
import Hero from '../Hero'
import SideBar from '../SideBar';
// import coverImage from '../../assets/cover/cover-image.jpg';



const WhatDo = (props) => {



  return (
    <>
      <Hero></Hero>
      <section className="my-5 px-3 section-top">
        <h3 className="section-title">MDD for P<sup>3</sup></h3>
        <h4>Planet<span className="dot"></span>People<span className="dot"></span>Pets
        </h4>
        <div className="my-2">
          <p className='pb-4'>
            Making the planet a better place for people and pets by building community. Your partner in development, bringing your website designs - and your community - to life.  <br />
            <br />Coding to increase clicks. Coding to increase sales. Coding so you can focus on your mission. <br />
            <br /> Together - we save the world. <br />

            <br /> One website at a time.
          </p>
        </div>
      </section>
      <SideBar></SideBar>
    </>
  );
}

export default WhatDo