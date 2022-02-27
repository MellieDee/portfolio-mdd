import React from 'react';
import Pdf from '../../assets/pdfs/dubberleyResume.PDF';
import Logo from '../../assets/logos/logo128.png';

function Navbar(props) {

  const updatePage = (e) => {
    // console.log(e.targets)
    let page = e.target.name;
    props.setCurrentPage(page);
  }

  return (
    <header data-testid="header" className="flex-row px-1">

      <nav className="container-nav flex-row">
        {/* <nav> */}
        <a href="/" className="logo-container">
          <img src={Logo} alt="M.D. Squared Logo" data-testid="logo" className="logo ripple" href="/" />
        </a>
        <ul className="flex-row nav-list" onClick={updatePage}>

          <li className="list-item mx-2">
            <a data-testid="about" name="about" href="#about">
              About Me
            </a>
          </li>
          <li className="list-item mx-2">
            <a data-testid="featured" name="featured" href="#featured">
              Featured Projects
            </a>
          </li>
          <li className="list-item mx-2">
            <a data-testid="contact" name="contact" href="#contact">
              Contact Me
            </a>
          </li>

          <li className="list-item mx-2">

            <a href={Pdf} rel="noopener noreferrer" target="_blank">
              <button className="button ripple" label="Resume">
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