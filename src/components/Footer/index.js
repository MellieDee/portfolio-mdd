import React from 'react';
import iconLi from '../../assets/markLinkedIn-64.png';
import iconGh from '../../assets/markGitHub-64.png'

const Footer = () => (
  <footer className="footer px-3">
    <div className="cl-foot-wrapper">
      <div className="footer-div">
        <h5 className="footer-title">another MD<sup>2</sup>design</h5>
        <p className="copyright">&copy; 2021 Melanie Dubberley & Mellie Dee Develops</p>
      </div>
      <ul>
        <li className="mx-auto">
          <a href="https://github.com/MellieDee" rel="noopener noreferrer" target="_blank">
            <img src={iconGh} alt="GitHub icon" />
          </a>

          <a href="https://www.linkedin.com/in/melaniedubbs" rel="noopener noreferrer" target="_blank">
            <img src={iconLi} alt="linkedIn icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
