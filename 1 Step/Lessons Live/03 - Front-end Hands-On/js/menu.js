/*DOM - DOCUMENT OBJECT MODEL */
const navMenu = document.querySelector('.nav-menu');
const hamburguer = document.querySelector('.hamburguer');

/*CRIANDO A FUNÇÃO TOGGLE ELEMENTO QUE PERMITE ALTERNAR ESTADOS   */
function  toggleMenu(){
  /*ATIVANDO O HAMBURGUER */
  hamburguer.classList.toggle('active');
  /*ATIVANDO O MENU NAVMENU */
  navMenu.classList.toggle('active');
}

/*EVENTO DE CLICAR NAS BARRAS */
hamburguer.addEventListener('click', toggleMenu);

/*EVENTO QUE NAVEGA OS ITEMS DOS ELEMENTOS */
navMenu.addEventListener('click', (event)=>{
  if(event.target.classList.contains('item-menu')){
    /*CHAMANDO A FUNÇÃO  */
    toggleMenu();
}
});