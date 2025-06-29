import React, { useEffect, useState } from 'react';
import contactImage from '../assets/images/contact_image.webp';


const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    const services = [
        'Diseño de Logos',
        'Banners Publicitarios',
        'Posters & Carteles',
        'Tarjetas de Presentación',
        'Diseño de Redes Sociales',
        'Flyers & Volantes',
        'Diseño de Packaging',
        'Paquete Express',
        'Paquete Básico',
        'Paquete Estándar',
        'Paquete Completo',
        'Proyecto Personalizado'
    ];

    const contactInfo = [
        {
            icon: <i className="bi bi-envelope-fill"></i>,
            title: "Email",
            info: "correo@gmail.com",
            subtitle: "contacto"
        },
        {
            icon: <i className="bi bi-telephone-fill"></i>,
            title: "Teléfono",
            info: "+505 ",
            subtitle: "Lun - Vie: 9:00 - 18:00"
        },
        {
            icon: <i className="bi bi-geo-alt-fill"></i>,
            title: "Ubicación",
            info: "Managua, NI",
            subtitle: "Ciudad de managua"
        },
        {
            icon: <i className="bi bi-clock-fill"></i>,
            title: "Tiempo de Respuesta",
            info: "24 horas",
            subtitle: "Respuesta garantizada"
        }
    ];

    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <div className="container px-4">
                <div style={{
                    transition: 'all 1s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}>
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-4 text-white">
                            Contáctanos
                        </h2>
                        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                            ¿Listo para llevar tu marca al siguiente nivel? Conversemos sobre tu proyecto
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Contact Info */}
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <h3 className="h2 fw-bold text-white mb-4">Hablemos</h3>
                                <p className="text-white-50 mb-4">
                                    Estamos aquí para hacer realidad tus ideas. Ya sea que necesites un diseño único
                                    o una identidad completa, nuestro equipo está listo para crear algo extraordinario contigo.
                                </p>

                                <div className="position-relative overflow-hidden rounded-3 mb-4">
                                    <img
                                        src={contactImage}
                                        alt="Team Wolf Contact"
                                        className="w-100 object-cover"
                                        style={{ height: '300px', filter: 'grayscale(100%) brightness(0.7)' }}
                                    />
                                    <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient-to-top from-red"
                                        style={{
                                            background: "linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0))"
                                        }}>
                                        <p className="text-white fw-bold mb-1">Siempre disponibles</p>
                                        <p className="text-white-50 mb-0">Para crear algo increíble juntos</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="row g-3">
                                {contactInfo.map((contact, index) => (
                                    <div key={index} className="col-md-6">
                                        <div
                                            className="bg-secondary bg-opacity-25 rounded-3 p-4 border border-secondary"
                                            style={{
                                                transition: `all 0.6s ease ${index * 100}ms`,
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                                            }}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="bg-secondary rounded-3 p-3 text-white">
                                                    {contact.icon}
                                                </div>
                                                <div>
                                                    <h4 className="h6 fw-bold text-white mb-1">{contact.title}</h4>
                                                    <p className="text-white mb-1 small">{contact.info}</p>
                                                    <p className="text-white-50 small mb-0">{contact.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <div className="bg-secondary bg-opacity-25 rounded-3 p-4 border border-secondary h-100">
                                <h3 className="h2 fw-bold text-white mb-4">Solicita tu cotización</h3>

                                <form onSubmit={handleSubmit} className="d-grid gap-4">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label text-white">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="form-control bg-dark text-white border-secondary"
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-white">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="form-control bg-dark text-white border-secondary"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label text-white">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="form-control bg-dark text-white border-secondary"
                                                placeholder="+52 555 123 4567"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-white">
                                                Servicio de interés
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="form-select bg-dark text-white border-secondary"
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label text-white">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-light py-3 fw-bold"
                                    >
                                        Enviar mensaje
                                    </button>

                                    <p className="text-white-50 small text-center mb-0">
                                        * Te responderemos en menos de 24 horas
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;