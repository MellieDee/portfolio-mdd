import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';



const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
          Passionate Front-End Web Developer with background in creativity and science. As a freelance food stylist I worked for eleven years on the widely popular “Kosher By Design” cookbook series. The process involved developing,  testing, revising, finalizing and ultimately styling the recipes; experience which directly translates to coding. Armed with a certificate in full-stack development from University California at Davis, I bring skills in JavaScript, Node, MySql and responsive web design. Versed in GitHub, I maintain the big picture while working independently or on a team. I believe honest communication between and having fun with team members is the best way to get the job done. If one succeeds; we all succeed.
        </p>
      </div>
    </section>
  );
}

export default About