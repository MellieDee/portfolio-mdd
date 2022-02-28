import React from 'react';
import iconLi from '../../assets/marks/markLinkedIn-96.png';
import iconGh from '../../assets/marks/markGitHub-96.png';
import iconSt from '../../assets/marks/markStack-96.png';
import iconMdd from '../../assets/logos/logo72.png';

const Footer = () => {

  return (
    <footer className="px-3">
      <div className="footer container-nav flex-row">
        <div className="footer-div">
          <h5 className="footer-title">another MD<sup>2</sup>design</h5>
          <p className="copyright">&copy; 2022 Melanie Dubberley & Mellie Dee Develops</p>
        </div>

        <ul className="social center flex-row nav-list">
          <li className="mx-2 mark">
            <a href="https://melliedee.github.io/portfolio-mdd/">
              <img src={iconMdd} alt="MDD logo" />
            </a>

            <a href="https://github.com/MellieDee" rel="noopener noreferrer" target="_blank">
              <img src={iconGh} alt="GitHub icon" />
            </a>

            <a href="https://www.linkedin.com/in/melaniedubbs" rel="noopener noreferrer" target="_blank">
              <img src={iconLi} alt="linkedIn icon" />
            </a>

            <a href="https://stackoverflow.com/users/16701955/mellie-dee" rel="noopener noreferrer" target="_blank">
              <img src={iconSt} alt="linkedIn icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );

}

export default Footer;
