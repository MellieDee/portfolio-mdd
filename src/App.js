import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import WhatDo from './components/WhatDo';



// import Document from './components/Document';
// import Gallery from './components/Gallery';


function App() {

  const [currentPage, setCurrentPage] = useState(`WhatDo`);

  const renderPage = () => {
    switch (currentPage) {
      case `WhatDo`:
        return <WhatDo />
      case `about`:
        return <About />
      case `contact`:
        return <Contact />
      case `portfolio`:
        return <Portfolio />
      default:
        return <WhatDo />

    }
  }

  return (
    <div className='App'>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Navbar>

      <main>

        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;