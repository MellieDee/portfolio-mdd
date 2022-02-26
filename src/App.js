import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhatDo from './components/WhatDo';



// import Document from './components/Document';
// import Gallery from './components/Gallery';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className='App'>
      <Navbar
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navbar>
      <Hero></Hero>
      <main>

        {!contactSelected ? (
          <>
            <WhatDo></WhatDo>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;