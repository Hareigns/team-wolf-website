import ServicePacksCard from '/src/components/Card';
import ServiceOthersCard from '/src/components/Card';


const Services = () => {

  {/* PACKS DE SERVICIOS */ }

  const fastPack = [
    { text: "1 diseno urgente (post/flayer)", icon: "bi bi-grid-fill text-primary" },
    { text: "Entrega en 24 hrs", icon: "bi bi-instagram text-warning" }
  ];

  const basicPack = [
    { text: "1 post (redes sociales)", icon: "bi bi-grid-fill" },
    { text: "1 Story (Instagram/Facebook)", icon: "bi bi-instagram" },
    { text: "1 Flyer digital simple", icon: "bi bi-file-image" }
  ];

  const standarPack = [
    { text: "3 posts (redes sociales)", icon: "bi bi-grid-fill text-primary" },
    { text: "2 Stories (incluye 1 portada)", icon: "bi bi-instagram text-warning" },
    { text: "1 Banner publicitario", icon: "bi bi-image-alt" }
  ];

  const completePack = [
    { text: "5 posts temáticos", icon: "bi bi-grid-fill text-primary" },
    { text: "3 Stories (más plantilla editable)", icon: "bi bi-instagram text-warning" },
    { text: "2 Flyers/Banners", icon: "bi bi-images" },
    { text: "1 Mockup de producto", icon: "bi bi-box-seam" }
  ];

  {/* OTROS SERVICIOS */ }

  const Service1 = [
    { text: "Diseño profesional frontal y posterior", icon: "bi bi-card-text text-primary" },
      { text: "Versión digital (PDF/PNG)", icon: "bi bi-file-earmark-arrow-down" },
      { text: "Hasta 2 revisiones", icon: "bi bi-arrow-repeat text-warning" }
  ];

  const Service2 = [
    { text: "Diseño personalizado", icon: "bi bi-gift-fill text-danger" },
      { text: "Versión para imprimir y compartir digital", icon: "bi bi-printer" }
  ];

  const Service3 = [
    { text: "Redes sociales", icon: "bi bi-facebook" },
      { text: "Páginas web", icon: "bi bi-globe2" },
      { text: "Impresión", icon: "bi bi-printer-fill" }
  ];

  const Service4 = [
    { text: "Diseño para eventos o promociones", icon: "bi bi-megaphone-fill text-info" },
      { text: "Versiones digital e impresa", icon: "bi bi-file-earmark-arrow-down" }
  ];

  const Service5 = [
    { text: "4-6 páginas diseñadas", icon: "bi bi-collection text-success" },
      { text: "Formato PDF listo para compartir", icon: "bi bi-filetype-pdf text-danger" }
  ];

  const Service6 = [
    { text: "Diseño para restaurantes/cafeterías", icon: "bi bi-cup-hot-fill" },
      { text: "Versión digital e impresa", icon: "bi bi-file-earmark-arrow-down" }
  ];

  const handleContact = (plan) => {
    console.log(`Contactar sobre: ${plan}`);
    // Aquí puedes agregar tu lógica para el click del botón
  };

  return (

    <div className='services-main-container'>

      <div className='servicePacks-main-container'>
        <div className="container py-5">
          <h1 className="text-center mb-4">Nuestros servicios</h1>
          <h2 className="text-center text-muted text-center mb-4">Paquetes disponibles</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">

            <ServicePacksCard
              title="C$"
              description="Rapido"
              listItems={fastPack}
              buttonText="Solicitar completo"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />
            <ServicePacksCard
              title="C$"
              description="Basico"
              listItems={basicPack}
              buttonText="Solicitar básico"
              buttonVariant="primary"
              onButtonClick={() => handleContact('básico')}
            />
            <ServicePacksCard
              title="C$"
              description="Estandar"
              listItems={standarPack}
              buttonText="Solicitar estandar"
              onButtonClick={() => handleContact('standar')}
            />
            <ServicePacksCard
              title="C$"
              description="Completo"
              listItems={completePack}
              buttonText="Solicitar completo"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />

          </div>
        </div>
      </div>

      <div className='serviceOthers-main-container'>
        <div className="container py-5">
          <h2 className="text-muted text-center mb-4">Otros servicios</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <ServiceOthersCard
              title="C$"
              description="Tarjetas de presentacion"
              listItems={Service1}
              buttonText="Solicitar"
              buttonVariant="primary"
              onButtonClick={() => handleContact('básico')}
            />
            <ServiceOthersCard
              title="C$"
              description="Tarjetas de cumpleanos/eventos"
              listItems={Service2}
              buttonText="Solicitar"
              onButtonClick={() => handleContact('standar')}
            />
            <ServiceOthersCard
              title="C$"
              description="Banners publicitarios"
              listItems={Service3}
              buttonText="Solicitar"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />
            <ServiceOthersCard
              title="C$"
              description="Posters"
              listItems={Service4}
              buttonText="Solicitar"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />
            <ServiceOthersCard
              title="C$"
              description="Catalogos digitales"
              listItems={Service5}
              buttonText="Solicitar"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />
            <ServiceOthersCard
              title="C$"
              description="Disenos de menus"
              listItems={Service1}
              buttonText="Solicitar"
              buttonVariant="primary"
              onButtonClick={() => handleContact('completo')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;