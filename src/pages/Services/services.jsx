import React, { useEffect, useState } from 'react';
import s_1 from '../../assets/images/s_1.webp';
import s_2 from '../../assets/images/s_2.webp';
import s_3 from '../../assets/images/s_3.webp';
import s_4 from '../../assets/images/s_4.webp';
import s_5 from '../../assets/images/s_5.webp';
import s_6 from '../../assets/images/s_6.webp';
import s_7 from '../../assets/images/s_7.webp';


const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      title: "Diseño de Logos",
      description: "Identidad visual única que representa la esencia de tu marca",
      image: s_1,
      price: "Desde C$",
      comingSoon: true
    },
    {
      title: "Banners Publicitarios",
      description: "Designs impactantes para tus campañas de marketing digital",
      image: s_2,
      price: "Desde C$"
    },
    {
      title: "Posters & Carteles",
      description: "Diseños llamativos para eventos y promociones especiales",
      image: s_3,
      price: "Desde C$"
    },
    {
      title: "Tarjetas de Presentación",
      description: "Primeras impresiones profesionales que perduran",
      image: s_4,
      price: "Desde C$"
    },
    {
      title: "Diseño de Redes Sociales",
      description: "Contenido visual optimizado para todas las plataformas",
      image: s_5,
      price: "Desde C$"
    },
    {
      title: "Flyers & Volantes",
      description: "Materiales promocionales que capturan la atención",
      image: s_6,
      price: "Desde C$"
    },
    {
      title: "Diseño de Packaging",
      description: "Empaques que protegen y venden tu producto",
      image: s_7,
      price: "Desde C$",
      comingSoon: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-5 bg-dark text-white">
      <div className="container px-4">
        <div style={{
          transition: 'all 1s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 text-white">
              Nuestros servicios
            </h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Servicios de diseño digital especializados para hacer crecer tu negocio
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`col-md-6 col-lg-4 col-xl-3 ${index === 6 ? 'col-xl-6 col-lg-6' : ''}`}
                style={{
                  transition: `all 0.6s ease ${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="card h-100 bg-secondary bg-opacity-25 border border-secondary border-opacity-50 hover-shadow">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="card-img-top w-100 object-fit-cover"
                      style={{ height: '200px', filter: 'grayscale(100%) brightness(0.7)' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-bottom from-black opacity-50"></div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-dark text-white px-3 py-2">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5 fw-bold text-white mb-3">{service.title}</h3>
                    <p className="card-text text-white-50 mb-4">{service.description}</p>
                    <button
                      className={`btn mt-auto align-self-stretch ${service.comingSoon
                        ? 'btn-secondary text-dark fw-bold'
                        : 'btn-dark'
                        }`}
                      onClick={service.comingSoon ? undefined : scrollToContact}
                      disabled={service.comingSoon}
                    >
                      {service.comingSoon ? 'Próximamente' : 'Solicitar cotización'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5">
            <div className="bg-secondary bg-opacity-25 rounded-3 p-5 border border-secondary">
              <h3 className="h2 fw-bold text-white mb-4">¿Necesitas algo personalizado?</h3>
              <p className="text-white-50 mb-4">
                Creamos soluciones de diseño únicas adaptadas a tus necesidades específicas
              </p>
              <button
                onClick={scrollToContact}
                className="btn btn-light px-5 py-3 fw-bold"
              >
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;