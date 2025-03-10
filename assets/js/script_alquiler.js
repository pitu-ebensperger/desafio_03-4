
const propiedades_alquiler = [
  {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: ' 123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 2000,
      smoke: false,
      pets: true
  },
  {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 2500,
      smoke: true,
      pets: true
  },
  {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 4.500,
      smoke: false,
      pets: false
  },
  {
    nombre: "Dúplex moderno en zona residencial",
    src: "https://plus.unsplash.com/premium_photo-1673014201308-5963c9017fb5?q=80&w=2247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Dúplex moderno con acabados de lujo en una zona exclusiva.",
    ubicacion: "789 Elite Street, Luxury Town, CA 22222",
    habitaciones: 4,
    banos: 3,
    costo: 5000,
    smoke: false,
    pets: true
},
{
    nombre: "Loft industrial en distrito artístico",
    src: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Loft con diseño industrial en una vibrante zona cultural.",
    ubicacion: "456 Art Avenue, Creative City, CA 33333",
    habitaciones: 1,
    banos: 1,
    costo: 2500,
    smoke: true,
    pets: true
},
{
    nombre: "Villa mediterránea con jardín privado",
    src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Hermosa villa mediterránea con amplio jardín y piscina.",
    ubicacion: "999 Sunset Blvd, Coastal Paradise, CA 44444",
    habitaciones: 5,
    banos: 4,
    costo: 7500,
    smoke: false,
    pets: false
}
]

function Propiedades() {
  const propiedadesSection = document.getElementById("alquiler");
  propiedadesSection.innerHTML = "";
  
  propiedades_alquiler.forEach(propiedad => {
      propiedadesSection.innerHTML += `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
                  <div class="card-body">
                      <h5 class="card-title">${propiedad.nombre}</h5>
                      <p class="card-text">${propiedad.descripcion}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                      <p>
                          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                      </p>
                      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                     <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                          ${propiedad.smoke ? '<i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar' : '<i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar'}
                      </p>
                      <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                          ${propiedad.pets ? '<i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas' : '<i class="fas fa-ban" aria-hidden="true"></i> No se permiten mascotas'}
                      </p> </div>
              </div>
          </div>`;
  });
}

document.addEventListener("DOMContentLoaded", Propiedades);
