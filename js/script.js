let ubicacionPrincipal = window.pageYOffset;
const nav = document.querySelector('.nav');
const link = document.getElementById('link');
const header = document.querySelector('.header');
const hamburger = document.getElementById('hamburger');
const logo = document.getElementById('logo');
console.log(link);
console.log('soy ubicacion: '+ubicacionPrincipal);


hamburger.addEventListener('click', () => {

    nav.classList.toggle('show--nav');

    if(nav.classList.contains ('show--nav')){
        hamburger.setAttribute('src', './images/icon-close.svg');
    }else{
        hamburger.setAttribute('src', './images/icon-hamburger.svg');
    }
});

window.addEventListener('scroll', function(e) {

    const desplazamientoActual = window.pageYOffset;
    const navLinks = document.getElementsByClassName('nav__link');

    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByTagName("header")[0].style.top = '0px';
        if(ubicacionPrincipal <= 10){
            this.document.getElementsByTagName("header")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
            logo.setAttribute('src', './images/logo.svg');
            for(let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.color = 'hsl(273, 4%, 51%)';
            }
        }
    }else{
        this.document.getElementsByTagName("header")[0].style.top = '-100px';
        this.document.getElementsByTagName("header")[0].style.backgroundColor = '#40365e';
        logo.setAttribute('src', './images/logoWhite.svg');

        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'hsl(0, 0%, 98%)';
        }
    }

    ubicacionPrincipal = desplazamientoActual;
});