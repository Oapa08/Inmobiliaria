// Datos de Propiedades en Venta
const propertiesForSale = [
  {
    title: 'Exquisite Luxury Apartment',
    image: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    details: 'This luxury apartment is located in an exclusive residential area.',
    address: '123 Luxury Lane, Prestige Suburb, CA 45678',
    bedrooms: 4,
    bathrooms: 4,
    price: 5000,
    smokingAllowed: false,
    petsAllowed: false,
  },
  {
    title: 'Cozy Mountain Apartment',
    image: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    details: 'This cozy apartment is situated on top of a mountain with breathtaking views.',
    address: '789 Mountain Road, Summit Peaks, CA 23456',
    bedrooms: 2,
    bathrooms: 1,
    price: 1200,
    smokingAllowed: true,
    petsAllowed: true,
  },
  {
    title: 'Luxury Penthouse with Panoramic Terrace',
    image: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    details: 'This luxury penthouse offers a panoramic terrace with spectacular views.',
    address: '567 Skyline Avenue, Skyview City, CA 56789',
    bedrooms: 3,
    bathrooms: 3,
    price: 4500,
    smokingAllowed: false,
    petsAllowed: true,
  },
  {
    title: 'Alto Polkura Project',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_667670-MLC74172455151_012024-F.webp',
    details: 'Alto Polkura is a project designed to enjoy outdoor life both inside and outside the project.',
    address: 'Av. Jose Rabat 12610, Colina',
    bedrooms: 3,
    bathrooms: 3,
    price: 4800,
    smokingAllowed: false,
    petsAllowed: false,
  },
];

// Datos de Propiedades en Alquiler
const propertiesForRent = [
  {
    title: 'City Center Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    details: 'This 2-bedroom apartment is located in the heart of the city, close to everything.',
    address: '123 Main Street, Anytown, CA 91234',
    bedrooms: 2,
    bathrooms: 2,
    price: 2000,
    smokingAllowed: false,
    petsAllowed: true,
  },
  {
    title: 'Bright Apartment with Sea View',
    image: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    details: 'This beautiful apartment offers an impressive sea view.',
    address: '456 Ocean Avenue, Seaside Town, CA 56789',
    bedrooms: 3,
    bathrooms: 3,
    price: 2500,
    smokingAllowed: true,
    petsAllowed: true,
  },
  {
    title: 'Modern Condominium in Residential Area',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    details: 'This elegant modern condominium is located in a quiet residential area.',
    address: '123 Main Street, Anytown, CA 91234',
    bedrooms: 2,
    bathrooms: 2,
    price: 2200,
    smokingAllowed: false,
    petsAllowed: false,
  },
  {
    title: 'Apartment in Esmeralda',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_889783-MLC80656750123_112024-F.webp',
    details: 'The apartment features porcelain tile throughout and double-glazed windows on white PVC frames.',
    address: 'Esmeralda 7001, La Cisterna',
    bedrooms: 1,
    bathrooms: 1,
    price: 3000,
    smokingAllowed: false,
    petsAllowed: true,
  },
];

// Selección de Elementos del DOM
const rentalProperties = document.getElementById("propiedades_alquiler");
const saleProperties = document.getElementById("propiedades_venta");
const topSaleProperties = document.getElementById("propiedades_venta_max");
const topRentalProperties = document.getElementById("propiedades_alquiler_max");

// Funciones para Mensajes de Fumar y Mascotas
const smokingPolicy = (allowed) => {
  return allowed ? `
    <p class="text-success">
      <i class="fas fa-smoking"></i> Smoking allowed
    </p>
  ` : `
    <p class="text-danger">
      <i class="fas fa-smoking-ban"></i> Smoking not allowed
    </p>
  `;
};

const petPolicy = (allowed) => {
  return allowed ? `
    <p class="text-success">
      <i class="fas fa-paw"></i> Pets allowed
    </p>
  ` : `
    <p class="text-danger">
      <i class="fas fa-ban"></i> Pets not allowed
    </p>
  `;
};

// Función para Generar HTML de Propiedades
const createPropertyHTML = (properties) => {
  let htmlContent = "";
  properties.forEach(property => {
    htmlContent += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${property.image}" class="card-img-top" alt="Property Image"/>
          <div class="card-body">
            <h5 class="card-title">${property.title}</h5>
            <p class="card-text">${property.details}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
            <p><i class="fas fa-bed"></i> ${property.bedrooms} Bedrooms | <i class="fas fa-bath"></i> ${property.bathrooms} Bathrooms</p>
            <p><i class="fas fa-dollar-sign"></i> ${property.price.toLocaleString('es-CL')}</p>
            ${smokingPolicy(property.smokingAllowed)}
            ${petPolicy(property.petsAllowed)}
          </div>
        </div>
      </div>
    `;
  });
  return htmlContent;
};

// Renderizado de Propiedades
if (rentalProperties) {
  rentalProperties.innerHTML = createPropertyHTML(propertiesForRent);
}
if (saleProperties) {
  saleProperties.innerHTML = createPropertyHTML(propertiesForSale);
}

// Función para Mostrar Solo las Primeras Tres Propiedades
const firstThree = (array) => array.slice(0, 3);

if (topRentalProperties) {
  topRentalProperties.innerHTML = createPropertyHTML(firstThree(propertiesForRent));
}
if (topSaleProperties) {
  topSaleProperties.innerHTML = createPropertyHTML(firstThree(propertiesForSale));
}
