import ServicesCard from '/src/components/Card';

const Services = () => {
  const basicFeatures = [
    { text: '✔ Diseño básico', icon: 'bi bi-palette' },
    { text: '✔ Soporte por email', icon: 'bi bi-envelope' },
    { text: '✔ Soporte por email', icon: 'bi bi-envelope' }
  ];

  const premiumFeatures = [
    { text: '✔ Diseños personalizados', icon: 'bi bi-star-fill text-warning' },
    { text: '✔ Soporte 24/7', icon: 'bi bi-headset text-primary' },
    { text: '✔ Dominio personalizado', icon: 'bi bi-globe' },
    { text: '✔ SEO básico', icon: 'bi bi-search' }
  ];

  const completeFeatures = [
    { text: '✔ Diseño premium', icon: 'bi bi-star-fill text-warning' },
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
    <div className="container py-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <ServicesCard
          title="Paquete Básico"
          description="Perfecto para startups"
          listItems={basicFeatures}
          buttonText="Contratar básico"
          buttonVariant="primary"
          onButtonClick={() => handleContact('básico')}
        />
        <ServicesCard
          title="Paquete Premium"
          description="Solución completa para empresas"
          listItems={premiumFeatures}
          buttonText="Contratar premium"
          onButtonClick={() => handleContact('premium')}
        />
        <ServicesCard
          title="Paquete Completo"
          description="Todo incluido + soporte prioritario"
          listItems={completeFeatures}
          buttonText="Contratar completo"
          buttonVariant="primary"
          onButtonClick={() => handleContact('completo')}
        />
      </div>
    </div>
  );
};

export default Services;