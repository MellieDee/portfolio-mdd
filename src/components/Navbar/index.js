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
        <a href="https://melliedee.github.io/portfolio-mdd/" className="logo-container">
          <img src={Logo} alt="M.D. Squared Logo" onClick={updatePage} data-testid="logo" className="logo ripple" href="/" />
        </a>
        <ul className="flex-row nav-list" onClick={updatePage}>
          {/* if currentPage =  props.currentPage */}
          <li>
            <a data-testid="about" className={`list-item mx-2 p-1 br-5 ${(props.currentPage === 'about') ? 'active-link' : ''}`} name="about" href="#about" >
              About Me
            </a>

          </li>
          <li>
            <a data-testid="featured" className={`list-item mx-2 p-1 br-5 ${(props.currentPage === 'featured') ? 'active-link' : ''}`} name="featured" href="#featured">
              Featured Projects
            </a>
          </li>
          <li>
            <a data-testid="contact" className={`list-item mx-2 p-1 br-5 ${(props.currentPage === 'contact') ? 'active-link' : ''}`} name="contact" href="#contact">
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