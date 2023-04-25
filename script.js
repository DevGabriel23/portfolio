let header = document.querySelector('header');

let headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    let velocidad = 0.125;
    let factor = 0.0025;
    let nuevaPosicion = Math.max(3, (44 - (scrollTop * velocidad))) + 'vh';
    let nuevoTamanio = Math.max(1.4, (2.5 - (scrollTop * factor))) + 'rem';

    header.querySelector('.name').style.top = nuevaPosicion;
    header.querySelector('.name').style.fontSize = nuevoTamanio;
});

// Leer datos del archivo JSON
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        // Obtener referencia al div del portafolio
        const portafolioDiv = document.getElementById('projects-container');

        // Recorrer los datos del JSON
        data.forEach(project => {
            // Crear elementos HTML
            const proyectoDiv = document.createElement('div');
            const tituloElemento = document.createElement('h2');
            const descripcionElemento = document.createElement('p');
            const urlElemento = document.createElement('a');

            // Agregar clases CSS a los elementos
            proyectoDiv.classList.add('project');
            tituloElemento.classList.add('project-title');
            descripcionElemento.classList.add('project-description');
            urlElemento.classList.add('project-url');

            // Establecer contenido y atributos de los elementos
            tituloElemento.textContent = project.name;
            descripcionElemento.textContent = project.description;
            urlElemento.href = project.url;
            urlElemento.target = '_blank'
            urlElemento.textContent = 'Ver más';

            // Agregar elementos al div del portafolio
            proyectoDiv.appendChild(tituloElemento);
            proyectoDiv.appendChild(descripcionElemento);
            proyectoDiv.appendChild(urlElemento);
            portafolioDiv.appendChild(proyectoDiv);
        });
    })
    .catch(error => console.error(error));

// Leer datos del archivo JSON
fetch('socials.json')
    .then(response => response.json())
    .then(data => {
        // Obtener referencia al div del portafolio
        const socialsDiv = document.getElementById('socials-container');

        // Recorrer los datos del JSON
        data.forEach(social => {
            // Crear elementos HTML
            const socialDiv = document.createElement('div');
            const iconElemento = document.createElement('i');
            const urlElemento = document.createElement('a');

            // Agregar clases CSS a los elementos
            socialDiv.classList.add('social');
            iconElemento.classList.add('fa-brands');
            iconElemento.classList.add(social.icon);
            iconElemento.classList.add('social-icon');
            urlElemento.classList.add('social-url');

            // Establecer contenido y atributos de los elementos
            urlElemento.href = social.url;
            urlElemento.target = '_blank';

            // Agregar elementos al div del portafolio
            socialDiv.appendChild(iconElemento);
            urlElemento.appendChild(socialDiv);
            socialsDiv.appendChild(urlElemento);
        });
    })
    .catch(error => console.error(error));