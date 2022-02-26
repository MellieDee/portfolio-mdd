import React from 'react';
import Pdf from '../../assets/dubberleyResume.PDF';
import Logo from '../../assets/logo128.png';

function Navbar() {



  return (
    <header data-testid="header" className="flex-row px-1">
      <a href="/">
        <img src={Logo} alt="M.D. Squared Logo" data-testid="logo" className="logo" href="/" />
      </a>
      {/* <h1>
        <a data-testid="link" href="/">Mellie Dee Develops</a>
      </h1> */}
      <nav>
        <ul className="flex-row">

          <li className="mx-2 my-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2 my-2">
            <a data-testid="featured" href="#featured">
              Featured Projects
            </a>
          </li>
          <li className="mx-2 my-2">
            <a data-testid="contact" href="#contact">
              Contact Me
            </a>
          </li>

          <li className="mx-2 my-2">

            <a href={Pdf} rel="noopener noreferrer" target="_blank">
              <button className="button" label="Resume">
                Resume
              </button>
            </a>
          </li>

        </ul>
      </nav>
    </header >
  );
}

export default Navbar;  