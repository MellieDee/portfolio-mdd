import React from 'react';
import profileImage from '../../assets/images/MddProfileNb-300.png';



const About = () => {
  return (
    <section className="cl-wrapper">
      <div className="page-text about">
        <h2 className="px-3" id="about">A little bit about me...</h2>
        {/* <img src={profileImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
        <div className="flex-row profile">
          <img src={profileImage} className="profile-img flex-basis-30" alt="MDD Profile" />

          <p className="profile-text flex-basis-70">
            Passionate Web Developer with background in creativity and science. As a freelance food stylist I worked for eleven years on the widely popular “Kosher By Design” cookbook series. The process involved developing,  testing, revising, finalizing and ultimately styling the recipes; experience which directly translates to coding. <br />
            <br />
            Armed with a certificate in full-stack development from University California at Davis, I bring skills in JavaScript, MongoDb, Express, React, Node,  and responsive web design. Versed in GitHub, I maintain the big picture while working independently or on a team. <br />
            <br />I believe honest communication between and having fun with team members is the best way to get the job done. <br />

            <br />If one succeeds; we all succeed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About