import ServicePacksCard from '/src/components/Card';
import ServiceOthersCard from '/src/components/Card';


const Services = () => {

  {/* PACKS DE SERVICIOS */ }

  const fastPack = [
    { text: '✔ Diseño rapido', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' }
  ];

  const basicPack = [
    { text: '✔ Diseño básico', icon: 'bi bi-palette' },
    { text: '✔ Soporte por email', icon: 'bi bi-envelope' },
    { text: '✔ Soporte por email', icon: 'bi bi-envelope' }
  ];

  const standarPack = [
    { text: '✔ Diseños personalizados', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte 24/7', icon: 'bi bi-headset text-primary' },
    { text: '✔ Dominio personalizado', icon: 'bi bi-globe' },
    { text: '✔ SEO básico', icon: 'bi bi-search' }
  ];

  const completePack = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  {/* OTROS SERVICIOS */ }

  const Service1 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  const Service2 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  const Service3 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  const Service4 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  const Service5 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
  ];

  const Service6 = [
    { text: '✔ Diseño standar', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte prioritario', icon: 'bi bi-headset text-primary' },
    { text: '✔ Hosting incluido', icon: 'bi bi-globe' },
    { text: '✔ SEO avanzado', icon: 'bi bi-search' },
    { text: '✔ Analytics mensual', icon: 'bi bi-graph-up' }
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