/*vamos hacer que le menu fuuncione usando el id  */

/*vamos a crera una variable boton que almacenara el ellemtno btn-menu que es como lo llamamos en en el html , vamos hacer 
otro tambien para guardar solo el menu */
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

/* el btnt menu va dectectar el vento como dectectamos el evento usando addEvenLstener clik y cuando
detecte el evento clik este va generar una funcion y la funcion es que a este ellemento menu
se le va agregar una clase llamada mostar la cual vamso a carear*/

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});
