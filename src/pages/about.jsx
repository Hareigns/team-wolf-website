function About({
    title = "Acerca de nosotros",
    description1 = "Team Wolf combina creatividad, tecnología y estrategia para desarrollar identidades visuales impactantes mediante gráficos, ayudando tanto a startups como a empresas consolidadas a modernizar su presencia digital.",
    description2 = "Ofrecemos soluciones personalizadas para todo tipo de negocios, desde emprendedores hasta grandes marcas, garantizando una identidad visual competitiva en el entorno digital.",
    description3 = "Nuestros diseños fusionan funcionalidad, emocionalidad y estética para fortalecer la conexión con tu audiencia y acelerar el crecimiento digital de tu proyecto.",
    missionItems = ["En Team Wolf, transformamos sueños en diseños accesibles y auténticos. Nos comprometemos a ofrecer un servicio transparente y personalizado, tratando cada proyecto con la misma pasión del primer día."],
    visionItems = ["Queremos ser el aliado creativo de marcas de todos los tamaños, demostrando que un buen diseño puede ser accesible. Nuestro éxito se mide en la satisfacción de nuestros clientes y en la historia que cada uno cuenta."],

}) {
    return (
        <div className='about-main-container'>
            <section className="py-5 bg-light">
                <div className="container">

                    <div className="col">
                        {/* Título */}
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="font-weight-bold mb-4">{title}</h2>
                            </div>
                        </div>

                        {/* Tres descripciones en columnas (3 en desktop, apiladas en móvil) */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <p className="text-muted text-center">{description1}</p>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <p className="text-muted text-center">{description2}</p>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                                <p className="text-muted text-center">{description3}</p>
                            </div>
                        </div>

                    </div>


                    {/* Misión y Visión (2 columnas en desktop, apiladas en móvil) */}
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <h5 className="text-center">Nuestra Misión</h5>
                            <ul className="list-unstyled">
                                {missionItems.map((item, i) => (
                                    <li key={`mission-${i}`} className="mb-2 text-center">
                                        <i className="bi bi-check-circle me-2 text-primary"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-4">
                            <h5 className="text-center">Nuestra Visión</h5>
                            <ul className="list-unstyled">
                                {visionItems.map((item, i) => (
                                    <li key={`vision-${i}`} className="mb-2 text-center">
                                        <i className="bi bi-bullseye me-2 text-primary"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;