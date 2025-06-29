import React, { useEffect, useState } from 'react';

const Packages = () => {
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

        const element = document.getElementById('packages');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const packages = [
        {
            name: "RÁPIDO",
            price: "C$",
            duration: "24 horas",
            description: "Solución urgente para necesidades inmediatas",
            features: [
                "1 diseño urgente (post/flyer)",
                "Entrega en 24 hrs"
            ],
            popular: false,
            buttonText: "Solicitar rápido"
        },
        {
            name: "BÁSICO",
            price: "C$",
            duration: "3-5 días",
            description: "Paquete esencial para pequeñas necesidades",
            features: [
                "1 post (redes sociales)",
                "1 Story (Instagram/Facebook)",
                "1 Flyer digital simple"
            ],
            popular: false,
            buttonText: "Solicitar básico"
        },
        {
            name: "ESTÁNDAR",
            price: "C$",
            duration: "5-7 días",
            description: "Solución balanceada para necesidades regulares",
            features: [
                "3 posts (redes sociales)",
                "2 Stories (incluye 1 portada)",
                "1 Banner publicitario"
            ],
            popular: true,
            buttonText: "Solicitar estándar"
        },
        {
            name: "COMPLETO",
            price: "C$",
            duration: "7-10 días",
            description: "Solución integral para necesidades completas",
            features: [
                "5 posts temáticos",
                "3 Stories (más plantilla editable)",
                "2 Flyers/Banners",
                "1 Mockup de producto"
            ],
            popular: false,
            buttonText: "Solicitar completo"
        }
    ];

    const handleContact = (plan) => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="packages" className="py-5 bg-dark text-white">
            <div className="container px-4">
                <div className={isVisible ? 'fade-in-up' : 'fade-out'}>
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-4 text-white">
                            Paquetes de Servicios
                        </h2>
                        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                            Soluciones completas adaptadas a diferentes necesidades y presupuestos
                        </p>
                    </div>

                    {/* Packages Grid */}
                    <div className="row g-4">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`col-md-6 col-lg-3 ${isVisible ? 'animate-item' : ''}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className={`position-relative h-100 rounded-3 overflow-hidden border ${pkg.popular
                                        ? 'border-white bg-light text-dark'
                                        : 'border-secondary bg-dark text-white'
                                    }`}>
                                    {pkg.popular && (
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <span className="bg-dark text-white px-4 py-1 rounded-pill small fw-bold">
                                                MÁS POPULAR
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-4 h-100 d-flex flex-column">
                                        <div className="text-center mb-4">
                                            <h3 className="h2 fw-bold mb-3">{pkg.name}</h3>
                                            <div className="display-6 fw-bold mb-2">{pkg.price}</div>
                                            <p className="small text-muted">{pkg.duration}</p>
                                            <p className="small mt-2">{pkg.description}</p>
                                        </div>

                                        <ul className="mb-4 flex-grow-1">
                                            {pkg.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="mb-2 d-flex align-items-start">
                                                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                                    <span className="small">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => handleContact(pkg.name)}
                                            className={`w-100 btn ${pkg.popular ? 'btn-dark' : 'btn-secondary'} py-3 fw-semibold`}
                                        >
                                            {pkg.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-5">
                        <div className="bg-secondary bg-opacity-10 rounded-3 p-4 border border-secondary">
                            <h3 className="h3 fw-bold mb-3">¿No encuentras lo que necesitas?</h3>
                            <p className="text-white-50 mb-4">
                                Creamos paquetes personalizados según tus necesidades específicas
                            </p>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                <button
                                    onClick={() => handleContact('personalizado')}
                                    className="btn btn-light px-4 py-2 fw-semibold"
                                >
                                    Solicitar Cotización Personalizada
                                </button>
                                <button className="btn btn-outline-light px-4 py-2 fw-semibold">
                                    Comparar Paquetes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;