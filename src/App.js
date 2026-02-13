import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <About />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
