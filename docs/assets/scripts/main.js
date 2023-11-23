
const inicio = document.querySelector('#inicio');
inicio.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionInicio = document.querySelector('.banner');
    if (sectionInicio) {
        sectionInicio.scrollIntoView({ behavior: 'smooth' });
    }
});


const aboutus = document.querySelector('#aboutus');
aboutus.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionAboutus = document.querySelector('.Aboutus');
    if (sectionAboutus) {
        sectionAboutus.scrollIntoView({ behavior: 'smooth' });
    }
});

const blogs = document.querySelector('#blogs');
blogs.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionBlogs = document.querySelector('.Blogs');
    if (sectionBlogs) {
        sectionBlogs.scrollIntoView({ behavior: 'smooth' });
    }
});

const testimonios = document.querySelector('#testimonios');
testimonios.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionTestimonios = document.querySelector('.Testimonios');
    if (sectionTestimonios) {
        sectionTestimonios.scrollIntoView({ behavior: 'smooth' });
    }
});

const nosotros = document.querySelector('#nosotros');
nosotros.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionNosotros = document.querySelector('.Nosotros');
    if (sectionNosotros) {
        sectionNosotros.scrollIntoView({ behavior: 'smooth' });
    }
});

const contacto = document.querySelector('#contacto');
contacto.addEventListener('click', (evento) => {
    evento.preventDefault();
    const sectionContacto = document.querySelector('.contact');
    if (sectionContacto) {
        sectionContacto.scrollIntoView({ behavior: 'smooth' });
    }
});

const login = document.querySelector('#login');
login.addEventListener('click', (evento) => {
    evento.preventDefault();
    
});
