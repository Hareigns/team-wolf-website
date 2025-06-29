import React, { useEffect, useState } from 'react';
import aboutImage from '../assets/images/about_image.webp';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-3'}`}>
          <div className="row align-items-center g-5">

          </div>
          <div className="row align-items-center g-5">
            {/* Content */}
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">
                <span className="text-white">
                  Sobre nosotros
                </span>
              </h2>

              {/* Mission */}
              <div className="mb-4">
                <h3 className="h2 fw-semibold text-white mb-3 d-flex align-items-center">
                  <div className="rounded-circle bg-secondary me-3 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                    <span className="text-dark fw-bold small"></span>
                  </div>
                  Nuestra misión
                </h3>
                <p className="text-white-50 lead">
                  Transformamos sueños en diseños accesibles y auténticos. Nos comprometemos a ofrecer un servicio transparente y personalizado, tratando cada proyecto con la misma pasión del primer día.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-4">
                <h3 className="h2 fw-semibold text-white mb-3 d-flex align-items-center">
                  <div className="rounded-circle bg-secondary me-3 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                    <span className="text-dark fw-bold small"></span>
                  </div>
                  Nuestra visión
                </h3>
                <p className="text-white-50 lead">
                  Queremos ser el aliado creativo de marcas de todos los tamaños, demostrando que un buen diseño puede ser accesible. Nuestro éxito se mide en la satisfacción de nuestros clientes y en la historia que cada uno cuenta.
                </p>
              </div>

              {/* Values */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-secondary bg-opacity-25 p-4 rounded border border-secondary">
                    <h4 className="text-white fw-semibold mb-2">Creatividad</h4>
                    <p className="text-white-50 small">Innovación en cada proyecto</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary bg-opacity-25 p-4 rounded border border-secondary">
                    <h4 className="text-white fw-semibold mb-2">Calidad</h4>
                    <p className="text-white-50 small">Excelencia sin compromisos</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary bg-opacity-25 p-4 rounded border border-secondary">
                    <h4 className="text-white fw-semibold mb-2">Compromiso</h4>
                    <p className="text-white-50 small">Dedicación total al proyecto</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-secondary bg-opacity-25 p-4 rounded border border-secondary">
                    <h4 className="text-white fw-semibold mb-2">Resultados</h4>
                    <p className="text-white-50 small">Impacto medible y duradero</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 position-relative">
              <div className="position-relative overflow-hidden rounded-3">
                <img
                  src={aboutImage}
                  alt="Team Wolf Design Team"
                  className="w-100 h-auto object-fit-cover filter grayscale hover-grayscale-0 transition-all duration-500"
                  style={{ height: '400px', filter: 'grayscale(100%) brightness(0.7)' }}
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-gradient-to-top from-black opacity-60"></div>
                <div className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0))"
                  }}>
                  <p className="text-white fw-semibold h5">Equipo TEAM WOLF</p>
                  <p className="text-white-50">Profesionales creativos dedicados</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;