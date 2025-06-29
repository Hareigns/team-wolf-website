import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-100 top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark bg-opacity-90 backdrop-blur border-bottom border-secondary border-opacity-50' 
        : 'bg-transparent'
    }`}>
      <nav className="container px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-gradient me-2 rounded-2 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
              <span className="text-dark fw-bold">TW</span>
            </div>
            <span className="text-white fs-3 fw-bold">
              TEAM <span className="text-secondary">WOLF</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="btn btn-link text-secondary text-decoration-none"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn btn-link text-secondary text-decoration-none"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="btn btn-link text-secondary text-decoration-none"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="btn btn-link text-secondary text-decoration-none"
            >
              Paquetes
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn btn-link text-secondary text-decoration-none"
            >
              Portafolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-dark bg-gradient px-4 py-2 rounded-3"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="d-md-none btn text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="bi bi-list" style={{fontSize: '1.5rem'}}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="d-md-none mt-3 py-3 border-top border-secondary">
            <div className="d-flex flex-column gap-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="btn btn-link text-secondary text-decoration-none text-start"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn btn-link text-secondary text-decoration-none text-start"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn btn-link text-secondary text-decoration-none text-start"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="btn btn-link text-secondary text-decoration-none text-start"
              >
                Paquetes
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="btn btn-link text-secondary text-decoration-none text-start"
              >
                Portafolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-dark bg-gradient rounded-3 text-start"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;