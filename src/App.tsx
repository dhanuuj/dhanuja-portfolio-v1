import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Currently from './components/Currently';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg text-text min-h-screen relative selection:bg-accent selection:text-[#080808]">
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Currently />
        <Projects />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
