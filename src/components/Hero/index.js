import React from 'react';
import bricks from '../../assets/images/bricks.png';
import styles from "../../index.css";





const Hero = () => {
  return (
    <article
      className={styles.article}
      style={{ backgroundImage: `url(${bricks}`, backgroundSize: `cover`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat` }}
    >
      <h1 className="heroText">
        Full Stack Developer.<br />
        Saving the world. <br />
        One website at a time.</h1>
    </article>
  );
};


export default Hero;







// --------- Future Enhancement -------------- 
//minify and laer [] of image sizes pick size per media size