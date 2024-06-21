// Modo noturno
const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'light' : 'dark'
    elemento.setAttribute('data-bs-theme', modo)
})


//  Script para inicialização do carrossel 
$(document).ready(function(){
    $('.items').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
