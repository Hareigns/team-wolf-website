import './App.css';
import Navbar from '/src/components/Header';
import Home from '/src/pages/home';
import About from '/src/pages/about';
import Services from '/src/pages/Services/services';
import Packages from '/src/pages/Services/packages';
import Contact from '/src/pages/contact';
import Footer from '/src/components/Footer';

function App() {
  return (
    <div className="main-main bg-dark">
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;