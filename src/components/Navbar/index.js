import React from 'react';
import Pdf from '../../assets/dubberleyResume.PDF';
import Logo from '../../assets/logo128.png';

function Navbar(props) {

  const updatePage = (e) => {
    console.log(e.targets)
    let page = e.target.name;
    props.setCurrentPage(page);
  }

  return (
    <header data-testid="header" className="px-1">
      {/* <a href="/" style={{ display: `inline-flex`, alignItems: `center` }}>
        <img src={Logo} alt="M.D. Squared Logo" data-testid="logo" className="logo" href="/" />
      </a> */}
      {/* <h1>
        <a data-testid="link" href="/">Mellie Dee Develops</a>
      </h1> */}
      <nav className="flex-row">
        {/* <a href="/" style={{ display: `inline-flex`, alignItems: `center` }}>
          <img src={Logo} alt="M.D. Squared Logo" data-testid="logo" className="logo" href="/" />
        </a> */}
        <a href="/" className="logo-container">
          <img src={Logo} alt="M.D. Squared Logo" data-testid="logo" className="logo" href="/" />
        </a>
        <ul className="flex-row nav-list" onClick={updatePage}>

          <li className="list-item mx-2">
            <a data-testid="about" name="about" href="#about">
              About Me
            </a>
          </li>
          <li className="list-item mx-2">
            <a data-testid="featured" name="portfolio" href="#featured">
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