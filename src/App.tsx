
import Navbar from './components/Navbar';
import Hero from './components/MainPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <PhotoGallery />
      <Contact />
    </div>
  );
}

export default App;