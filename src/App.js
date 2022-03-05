import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import TagLine from './components/TagLine';
import WhatDo from './components/WhatDo';


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
      case `featured`:
        return <Portfolio />
      default:
        return <WhatDo />

    }
  }


  return (
    <div className='App'>
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Navbar>

      <main>

        {renderPage()}
      </main>
      <TagLine />
      <Footer />
    </div>
  );
}

export default App;