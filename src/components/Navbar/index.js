import React from 'react';
import Pdf from '../../assets/dubberleyResume.PDF';

function Navbar() {



  return (
    <header data-testid="header" className="flex-row px-1">
      <h1>
        <a data-testid="link" href="/">Mellie Dee Develops</a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="featured" href="#featured">
              Featured Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact">
              Contact Me
            </a>
          </li>
          {/* <li className="mx-2">
            <a data-testid="resume" className="resume button" href="../public/dubberleyResume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li> */}

          <li className="mx-2">

            <a href={Pdf} rel="noopener noreferrer" target="_blank">
              <button className="button" label="Resume">
                Resume
              </button>
            </a>
          </li>
          {/* 
          <li className="mx-2">
            <button type="submit" className="button" onClick={() => { window.open('../public/dubberleyResume.pdf') }}>Download!</button>
          </li> */}

        </ul>
      </nav>
    </header >
  );
}

export default Navbar;  