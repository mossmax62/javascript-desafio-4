const venta = [
    {
        nombre: 'Propiedad 1',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Esta es la descripción de la propiedad 1',
        ubicacion: 'Ubicación 1',
        habitaciones: 3,
        baños: 2,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Propiedad 2',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Esta es la descripción de la propiedad 2',
        ubicacion: 'Ubicación 2',
        habitaciones: 2,
        baños: 1,
        costo: 400000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Propiedad 3',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Esta es la descripción de la propiedad 3',
        ubicacion: 'Ubicación 3',
        habitaciones: 4,
        baños: 3,
        costo: 600000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Propiedad 4',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=6',
        descripcion: 'Esta es la descripción de la propiedad 4',
        ubicacion: 'Ubicación 4',
        habitaciones: 1,
        baños: 1,
        costo: 300000,
        smoke: false,
        pets: true
    }
];

const arriendo = [
    {
        nombre: 'Propiedad 5',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Esta es la descripción de la propiedad 5',
        ubicacion: 'Ubicación 5',
        habitaciones: 2,
        baños: 1,
        costo: 2000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Propiedad 6',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Esta es la descripción de la propiedad 6',
        ubicacion: 'Ubicación 6',
        habitaciones: 3,
        baños: 2,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Propiedad 7',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Esta es la descripción de la propiedad 7',
        ubicacion: 'Ubicación 7',
        habitaciones: 1,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Propiedad 8',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Esta es la descripción de la propiedad 8',
        ubicacion: 'Ubicación 8',
        habitaciones: 4,
        baños: 3,
        costo: 3000,
        smoke: true,
        pets: true
    }
];


function generarHtml(propiedades) {
    let html = '';
    propiedades.forEach(propiedad => {
        html += `
        <div class="col-md-3 mb-3">
            <div class="card" style="width: 18rem;">
                <img src="${propiedad.src}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title   ">${propiedad.nombre}</h5>          

                    <p class="card-text">${propiedad.descripcion}</p>

                    <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p class="card-text"><i class="fas fa-bed"></i> ${propiedad.habitaciones}|
                    <i class="fas fa-bath"></i> ${propiedad.baños}</p>
                    <p class="card-text">$ ${propiedad.costo}</p>
                    <p class="card-text"><span class="${propiedad.smoke ? 'text-success' : 'text-danger'}">${propiedad.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}</span></p>
                    <p class="card-text"><span class="${propiedad.pets ? 'text-success' : 'text-danger'}">${propiedad.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas'}</span></p>
                    
                </div>
            </div>
            </div>
        `;
    }
    );
    return html;
}

function mostrarVenta() {
    document.getElementById('propiedades').innerHTML = generarHtml(venta);
}

function mostrarAlquiler() {
    document.getElementById('propiedades').innerHTML = generarHtml(arriendo);
}



