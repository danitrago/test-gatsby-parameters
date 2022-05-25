const path = require(`path`);

const data = {
  status: 200,
  userMessage: "",
  developerMessage: "",
  errorCode: null,
  moreInfo: null,
  data: {
    area: [
      "Administración y Secretarías",
      "Agropecuario, Pesca y Forestal",
      "Artes y Diseño",
      "Comunicación, Periodismo y Relaciones Públicas",
      "Recursos Humanos",
      "Venta y Post Venta -  Personas (B2C)"
    ],
    jornadaLaboral: [
      "Full Time",
      "Part Time",
      "Por horas",
      "Por turnos",
      "Práctica / Pasantía",
      "TEMPORARY"
    ],
    ciudad: [
      { mun: "Medellín", region: "Medellín y área metropolitana" },
      { mun: "Abejorral", region: "Oriente" },
      { mun: "Abriaquí", region: "Occidente" },
      { mun: "Alejandría", region: "Oriente" },
      { mun: "Amagá", region: "Suroeste" },
      { mun: "Amalfi", region: "Nordeste" },
      { mun: "Andes", region: "Suroeste" },
      { mun: "Angelópolis", region: "Suroeste" },
      { mun: "Angostura", region: "Norte" },
      { mun: "Anorí", region: "Nordeste" },
      { mun: "Anza", region: "Occidente" },
      { mun: "Apartadó", region: "Urabá" },
      { mun: "Arboletes", region: "Urabá" },
      { mun: "Argelia", region: "Oriente" },
      { mun: "Armenia", region: "Occidente" },
      { mun: "Barbosa", region: "Medellín y área metropolitana" },
      { mun: "Bello", region: "Medellín y área metropolitana" },
      { mun: "Belmira", region: "Norte" },
      { mun: "Betania", region: "Suroeste" },
      { mun: "Betulia", region: "Suroeste" },
      { mun: "Briceño", region: "Norte" },
      { mun: "Buriticá", region: "Occidente" },
      { mun: "Cáceres", region: "Bajo Cauca" },
      { mun: "Caicedo", region: "Occidente" },
      { mun: "Caldas", region: "Medellín y área metropolitana" },
      { mun: "Campamento", region: "Norte" },
      { mun: "Cañasgordas", region: "Occidente" },
      { mun: "Caracolí", region: "Magdalena Medio" },
      { mun: "Caramanta", region: "Suroeste" },
      { mun: "Carepa", region: "Urabá" },
      { mun: "Carolina", region: "Medellín y área metropolitana" },
      { mun: "Caucasia", region: "Bajo Cauca" },
      { mun: "Chigorodó", region: "Urabá" },
      { mun: "Cisneros", region: "Nordeste" },
      { mun: "Ciudad Bolívar", region: "Suroeste" },
      { mun: "Cocorná", region: "Oriente" },
      { mun: "Concepción", region: "Oriente" },
      { mun: "Concordia", region: "Suroeste" },
      { mun: "Copacabana", region: "Medellín y área metropolitana" },
      { mun: "Dabeiba", region: "Occidente" },
      { mun: "Don Matías", region: "Norte" },
      { mun: "Ebéjico", region: "Occidente" },
      { mun: "El Bagre", region: "Bajo Cauca" },
      { mun: "El Carmen de Viboral", region: "Oriente" },
      { mun: "El Peñol", region: "Oriente" },
      { mun: "El Retiro", region: "Oriente" },
      { mun: "El Santuario", region: "Oriente" },
      { mun: "Entrerrios", region: "Norte" },
      { mun: "Envigado", region: "Medellín y área metropolitana" },
      { mun: "Fredonia", region: "Suroeste" },
      { mun: "Frontino", region: "Occidente" },
      { mun: "Giraldo", region: "Occidente" },
      { mun: "Girardota", region: "Medellín y área metropolitana" },
      { mun: "Gómez Plata", region: "Norte" },
      { mun: "Granada", region: "Oriente" },
      { mun: "Guadalupe", region: "Norte" },
      { mun: "Guarne", region: "Oriente" },
      { mun: "Guatapé", region: "Oriente" },
      { mun: "Heliconia", region: "Occidente" },
      { mun: "Hispania", region: "Suroeste" },
      { mun: "Itagui", region: "Medellín y área metropolitana" },
      { mun: "Ituango", region: "Norte" },
      { mun: "Jardín", region: "Suroeste" },
      { mun: "Jericó", region: "Suroeste" },
      { mun: "La Ceja", region: "Oriente" },
      { mun: "La Estrella", region: "Medellín y área metropolitana" },
      { mun: "La Pintada", region: "Suroeste" },
      { mun: "La Unión", region: "Oriente" },
      { mun: "Liborina", region: "Occidente" },
      { mun: "Maceo", region: "Magdalena Medio" },
      { mun: "Marinilla", region: "Oriente" },
      { mun: "Montebello", region: "Suroeste" },
      { mun: "Murindó", region: "Urabá" },
      { mun: "Mutatá", region: "Urabá" },
      { mun: "Nariño", region: "Oriente" },
      { mun: "Nechí", region: "Bajo Cauca" },
      { mun: "Necoclí", region: "Urabá" },
      { mun: "Olaya", region: "Occidente" },
      { mun: "Peque", region: "Occidente" },
      { mun: "Pueblorrico", region: "Suroeste" },
      { mun: "Puerto Berrío", region: "Magdalena Medio" },
      { mun: "Puerto Nare", region: "Magdalena Medio" },
      { mun: "Puerto Triunfo", region: "Magdalena Medio" },
      { mun: "Remedios", region: "Nordeste" },
      { mun: "Rionegro", region: "Medellín y área metropolitana" },
      { mun: "Sabanalarga", region: "Occidente" },
      { mun: "Sabaneta", region: "Medellín y área metropolitana" },
      { mun: "Salgar", region: "Suroeste" },
      { mun: "San Andrés de Cuerquía", region: "Norte" },
      { mun: "San Carlos", region: "Oriente" },
      { mun: "San Francisco", region: "Oriente" },
      { mun: "San Jerónimo", region: "Occidente" },
      { mun: "San José de La Montaña", region: "Norte" },
      { mun: "San Juan de Urabá", region: "Urabá" },
      { mun: "San Luis", region: "Oriente" },
      { mun: "San Pedro", region: "Norte" },
      { mun: "San Pedro de Uraba", region: "Urabá" },
      { mun: "San Rafael", region: "Oriente" },
      { mun: "San Roque", region: "Nordeste" },
      { mun: "San Vicente", region: "Oriente" },
      { mun: "Santa Bárbara", region: "Suroeste" },
      { mun: "Santa Rosa de Osos", region: "Norte" },
      { mun: "Santafé de Antioquia", region: "Occidente" },
      { mun: "Santo Domingo", region: "Nordeste" },
      { mun: "Segovia", region: "Nordeste" },
      { mun: "Sonson", region: "Oriente" },
      { mun: "Sopetrán", region: "Occidente" },
      { mun: "Támesis", region: "Suroeste" },
      { mun: "Tarazá", region: "Bajo Cauca" },
      { mun: "Tarso", region: "Suroeste" },
      { mun: "Titiribí", region: "Suroeste" },
      { mun: "Toledo", region: "Norte" },
      { mun: "Turbo", region: "Urabá" },
      { mun: "Uramita", region: "Occidente" },
      { mun: "Urrao", region: "Suroeste" },
      { mun: "Valdivia", region: "Norte" },
      { mun: "Valparaíso", region: "Suroeste" },
      { mun: "Vegachí", region: "Nordeste" },
      { mun: "Venecia", region: "Suroeste" },
      { mun: "Vigía del Fuerte", region: "Urabá" },
      { mun: "Yalí", region: "Nordeste" },
      { mun: "Yarumal", region: "Norte" },
      { mun: "Yolombó", region: "Nordeste" },
      { mun: "Yondó", region: "Magdalena Medio" },
      { mun: "Zaragoza", region: "Bajo Cauca" }
    ],
    modalidadRemoto: [
      "Remoto solo localmente",
      "Sin opción remoto",
      "Temporalmente remoto",
      "Totalmente remoto"
    ],
    tipoContrato: ["Otro", "Permanente (Indefinido)", "Temporal (Plazo Fijo)"],
    region: [
      "Bajo Cauca",
      "Magdalena Medio",
      "Medellín y área metropolitana",
      "Nordeste",
      "Norte",
      "Occidente",
      "Oriente",
      "Suroeste",
      "Urabá"
    ]
  }
};

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Vacantes = path.resolve(`src/templates/Vacantes.tsx`);
  const RegionTemplate = path.resolve(`src/templates/RegionTemplate.tsx`);
  const MunicipioTemplate = path.resolve(`src/templates/MunicipioTemplate.tsx`);
  const result = [
    {
      slug: "/vacantesV3/municipio/Rionegro",
      title: "Rionegro"
    },
    {
      slug: "/vacantesV3/municipio/La Ceja",
      title: "La Ceja"
    },
    {
      slug: "/vacantesV3/municipio/Marinilla",
      title: "Marinilla"
    },
    {
      slug: "/vacantesV3/municipio/Abejorral",
      title: "Abejorral"
    },
    {
      slug: "/vacantesV3/municipio/Itaguí",
      title: "Itaguí"
    }
  ];

  result.forEach((edge) => {
    createPage({
      path: `${edge.slug}`,
      component: Vacantes,
      context: {
        title: edge.title
      }
    });
  });

  data.data.region.forEach((region) => {
    createPage({
      path: `/region/${region}`,
      component: RegionTemplate,
      context: {
        title: region
      }
    });
  });

  data.data.ciudad.forEach((ciudad) => {
    createPage({
      path: `/region/${ciudad.region}/${ciudad.mun}`,
      component: MunicipioTemplate,
      context: {
        municipio: ciudad.mun,
        region: ciudad.region
      }
    });
  });




};
