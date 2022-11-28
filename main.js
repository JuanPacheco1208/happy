let userName = prompt("Eres administrador?", "");

if (userName == "Admin") {

    let pass = prompt("¿Contraseña?", "");

    if (pass === "12345") {
  alert( "Bienvenido!" );
    } else if (pass === "" || pass === null) {
  alert( "Cancelado." );
    } else {
  alert( "Contraseña incorrecta" );
    }

} else if (userName === "" || userName === null) {
    alert( "Canceledo" );
} else {
    alert( "No te conozco" );
}



function bienvenida() {
    alert ("Hola, bienvenido a multiuses! :D, pásala bien por aquí :D")
  }
  <input type="button" onclick="mialerta();" value="Clic para ver el mensaje de alerta"/>



function mostrarSaludo(){
 
    fecha = new Date(); 
    hora = fecha.getHours();
   
    if(hora >= 0 && hora < 12){
      texto = "Buenos Días";
      imagen = "img/dia.png";
    }
   
    if(hora >= 12 && hora < 18){
      texto = "Buenas Tardes";
      imagen = "img/tarde.png";
    }
   
    if(hora >= 18 && hora < 24){
      texto = "Buenas Noches";
      imagen = "img/noche.png";
    }
   
    document.images["tiempo"].src = imagen;
   
    document.getElementById('txtsaludo').innerHTML = texto;
   
  }

  //---------------------------------------------------------------------------//


