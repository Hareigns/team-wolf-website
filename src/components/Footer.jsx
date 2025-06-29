import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <i className="bi bi-instagram"></i>,
      url: 'https://instagram.com/teamwolf.design'
    },
    {
      name: 'Facebook',
      icon: <i className="bi bi-facebook"></i>,
      url: 'https://facebook.com/teamwolf.design'
    },
    {
      name: 'LinkedIn',
      icon: <i className="bi bi-linkedin"></i>,
      url: 'https://linkedin.com/company/teamwolf-design'
    },
    {
      name: 'Behance',
      icon: <i className="bi bi-behance"></i>,
      url: 'https://behance.net/teamwolf'
    }
  ];

  return (
    <footer className="bg-dark text-white border-top border-secondary">
      {/* Pre-footer CTA */}
      <div className="py-5 border-bottom border-secondary">
        <div className="container text-center px-4">
          <h3 className="display-5 fw-bold text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="lead text-white-50 mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Transformemos tu visión en realidad con diseños que impactan y convierten
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-light btn-lg px-5 py-3 fw-semibold"
            >
              Contactar Ahora
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
            >
              Ver Paquetes
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-5">
        <div className="container px-4">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-md-6 col-lg-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-secondary bg-gradient me-3 rounded-2 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                  <span className="text-dark fw-bold fs-5">TW</span>
                </div>
                <span className="text-white fs-3 fw-bold">
                  TEAM <span className="text-secondary">WOLF</span>
                </span>
              </div>
              <p className="text-white-50 mb-4">
                Diseño accesible, porque todos merecen brillar.
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    style={{width: '40px', height: '40px'}}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="col-md-6 col-lg-4">
              <h4 className="h4 fw-bold text-white mb-4">Servicios</h4>
              <ul className="list-unstyled">
                {[
                  'Diseño de Logos',
                  'Banners Publicitarios',
                  'Tarjetas de Presentación',
                  'Diseño de Redes Sociales',
                  'Packaging Design',
                  'Identidad Corporativa'
                ].map((service, index) => (
                  <li key={index} className="mb-2">
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="btn btn-link text-secondary text-decoration-none p-0"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-md-6 col-lg-4">
              <h4 className="h4 fw-bold text-white mb-4">Empresa</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="btn btn-link text-secondary text-decoration-none p-0"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="btn btn-link text-secondary text-decoration-none p-0"
                  >
                    Portafolio
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => scrollToSection('packages')}
                    className="btn btn-link text-secondary text-decoration-none p-0"
                  >
                    Paquetes
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn btn-link text-secondary text-decoration-none p-0"
                  >
                    Contacto
                  </button>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 border-top border-secondary">
        <div className="container px-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div className="text-white-50 small">
              © {currentYear} Team Wolf. Todos los derechos reservados.
            </div>
            <div className="d-flex gap-4 small">
              <a href="#" className="text-white-50 text-decoration-none">
                Política de Privacidad
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                Términos de Servicio
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;