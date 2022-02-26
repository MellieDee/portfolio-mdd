import React from 'react';
// import About from './components/About';
import WhatDo from './components/WhatDo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
// import Document from './components/Document';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <main>
        <WhatDo></WhatDo>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;