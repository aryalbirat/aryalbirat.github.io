
import Navbar from './components/Navbar';
import Hero from './components/MainPage';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import PhotoGallery from './components/PhotoGallery';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-secondary-950 text-secondary-50 min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Portfolio />
        <PhotoGallery />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>  );
}

export default App;