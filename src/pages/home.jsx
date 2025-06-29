import React, { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Elemento "services" no encontrado');
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback si el ref no está configurado
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Elemento "contact" no encontrado');
      }
    }
  };

  return (
    <section id="home" className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-80 z-1"></div>
        <img 
          src="https://images.pexels.com/photos/12902999/pexels-photo-12902999.jpeg"
          alt="Professional Designer"
          className="w-100 h-100 object-fit-cover grayscale"
        />
      </div>

      {/* Content */}
      <div className={`position-relative z-2 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-3'
      }`}>
        <div className="container">
          <h1 className="display-1 fw-bold mb-4">
            <span className="text-white">
              TEAM
            </span>
            <br />
            <span className="text-secondary">
              WOLF
            </span>
          </h1>
          
          <p className="fs-3 text-white-50 mb-5 mx-auto" style={{maxWidth: '700px'}}>
            Transformamos tu visión en <span className="text-white fw-semibold">diseño digital excepcional</span>. 
            Creamos identidades visuales que impactan y convierten.
          </p>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-5">
            <button 
              onClick={scrollToServices}
              className="btn btn-light btn-lg px-5 py-3 fw-semibold"
            >
              Ver servicios
            </button>
            <button 
              onClick={scrollToContact}
              className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
            >
              Contactar ahora
            </button>
          </div>

          {/* Stats */}
          <div className="row g-4 max-w-md mx-auto text-center">
            <div className="col">
              <div className="display-6 fw-bold text-white mb-2">0+</div>
              <div className="text-white-50 small">Proyectos</div>
            </div>
            <div className="col">
              <div className="display-6 fw-bold text-white mb-2">0+</div>
              <div className="text-white-50 small">Clientes</div>
            </div>
            <div className="col">
              <div className="display-6 fw-bold text-white mb-2">0+</div>
              <div className="text-white-50 small">Años</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x z-2 mb-4">
        <div className="animate-bounce">
          <i className="bi bi-arrow-down text-white-50 fs-4"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;