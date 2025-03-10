const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
        ubicacion: "789 Mountain Road, Summit, CA 23456",
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa moderna en el centro",
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Casa moderna con diseño innovador en el centro de la ciudad.",
        ubicacion: "100 Main Street, City Center, CA 12345",
        habitaciones: 5,
        banos: 3,
        costo: 6000,
        smoke: true,
        pets: false
    },
    {
        nombre: "Cabaña rústica junto al lago",
        src: "https://images.unsplash.com/photo-1590725175785-de025cc60835?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Hermosa cabaña rústica con vistas al lago y rodeada de naturaleza.",
        ubicacion: "321 Lakeview Drive, Serenity Lake, CA 67890",
        habitaciones: 3,
        banos: 2,
        costo: 3500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento minimalista con vista al mar",
        src: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
        descripcion: "Espacioso apartamento con vista panorámica al océano.",
        ubicacion: "555 Ocean Avenue, Beachside, CA 11111",
        habitaciones: 2,
        banos: 2,
        costo: 4200,
        smoke: true,
        pets: false
    },
];


let itemVentas = ""
for (let propiedad of propiedades_venta){
    itemVentas += ` <div class="col-md-4 mb-4">
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
} 

const propVenta = document.querySelector("#venta")
propVenta.innerHTML = itemVentas