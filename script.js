let header = document.querySelector('header');

let headerHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    let velocidad = 0.125;
    let factor = 0.0025;
    let nuevaPosicion = Math.max(3, (43 - (scrollTop * velocidad))) + 'vh';
    let nuevoTamanio = Math.max(1.4, (2.5 - (scrollTop * factor))) + 'rem';

    header.querySelector('.name').style.top = nuevaPosicion;
    header.querySelector('.name').style.fontSize = nuevoTamanio;
});

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener('scroll', function () {

    let nav = document.querySelector('nav');
    let links = nav.querySelectorAll('a');
    let title = document.getElementById('name');

    let sectionProjects = document.getElementById('projects');
    let sectionSocials = document.getElementById('socials');
    let sectionProjectsTop = sectionProjects.offsetTop;
    let sectionSocialsTop = sectionSocials.offsetTop;
    let windowHeight = window.innerHeight;
    let windowScroll = this.scrollY;

    if (windowScroll + 60 > sectionProjectsTop && windowScroll < (sectionSocialsTop - 60 + sectionSocials.offsetHeight - windowHeight)) {
        header.style.backgroundColor = 'var(--white)';
        title.style.color = 'var(--primary)';
        links.forEach(function (enlace) {
            enlace.style.color = 'var(--primary)';
        });
    } else if (windowScroll + 100 >= sectionSocialsTop) {
        header.style.backgroundColor = 'var(--black)';
        title.style.color = 'var(--primary)';
        links.forEach(function (enlace) {
            enlace.style.color = 'var(--primary)';
        });
    } else {
        header.style.backgroundColor = 'var(--primary)';
        title.style.color = 'var(--white)';
        links.forEach(function (enlace) {
            enlace.style.color = 'var(--white)';
        });
    }
});

fetch('projects.json')
    .then(response => response.json())
    .then(data => {

        const portafolioDiv = document.getElementById('projects-container');

        data.forEach(project => {

            const proyectoDiv = document.createElement('div');
            const tituloElemento = document.createElement('h2');
            const infoProyecto = document.createElement('div');
            const descripcionElemento = document.createElement('p');
            const tecnologias = document.createElement('div');
            const urlElemento = document.createElement('a');

            proyectoDiv.classList.add('project');
            tituloElemento.classList.add('project-title');
            infoProyecto.classList.add('info')
            descripcionElemento.classList.add('description');
            tecnologias.classList.add('tecnologies')
            urlElemento.classList.add('project-url');

            tituloElemento.textContent = project.name;
            descripcionElemento.textContent = project.description;
            urlElemento.href = project.url;
            urlElemento.target = '_blank'
            urlElemento.textContent = 'Github';


            proyectoDiv.appendChild(tituloElemento);
            infoProyecto.appendChild(descripcionElemento);
            project.tecnologias.forEach(tecnology => {
                let tec = document.createElement('p');
                tec.classList.add('tecnology')
                tec.textContent = tecnology
                tecnologias.appendChild(tec);
            })
            infoProyecto.appendChild(tecnologias);
            infoProyecto.appendChild(urlElemento);
            proyectoDiv.appendChild(infoProyecto);
            portafolioDiv.appendChild(proyectoDiv);
        });
    })
    .catch(error => console.error(error));

fetch('socials.json')
    .then(response => response.json())
    .then(data => {
        const socialsDiv = document.getElementById('socials-container');

        data.forEach(social => {

            const socialDiv = document.createElement('div');
            const iconElemento = document.createElement('i');
            const urlElemento = document.createElement('a');

            iconElemento.classList.add('fa-brands');
            iconElemento.classList.add(social.icon);
            urlElemento.classList.add('social-url');

            urlElemento.href = social.url;
            urlElemento.target = '_blank';

            socialDiv.appendChild(iconElemento);
            urlElemento.appendChild(socialDiv);
            socialsDiv.appendChild(urlElemento);
        });
    })
    .catch(error => console.error(error));