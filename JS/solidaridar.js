/* Archivo JavaScript - Solidaridar*/
/* TPO 05-2022 Analía Farinazzo analia.farinazzo@gmail.com */
/* CAC 2022 - Comisión 22066 - Docente Ariel Palazzesi */

/* Validación del Formulario en QuieroDar*/

function validarFormulario() {

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('telefono').value;
    var food = document.getElementById('donar').value;
    var adress = document.getElementById('direccion').value;

    if ((name.length == 0) || (email.length == 0) || (phone.length == 0) || (food.length == 0) || (adress.length == 0))
    {alert('Por favor, revisar el fomulario ingresado.  Hay campos obligatorios vacíos.');}
      else {alert ("Gracias por ponerse en contacto con nosotros.");}
  }
  
  const Boton=document.querySelector("#contacto-enviar");
  Boton.onclick = validarFormulario();

  /* Validación del Formulario en QuieroRecibir*/

  function validarFormulario2() {

    var namec = document.getElementById('nombre').value;
    var phonec = document.getElementById('telefono').value;
    var adressc = document.getElementById('direccion').value;
    var barrioc = document.getElementById('barrio').value;
    var loclc = document.getElementById('localidad').value;
    var benefc = document.getElementById('cantPersonas').value;

    if ((namec.length == 0) || (phonec.length == 0) || (adressc.length == 0) || (barrioc.length == 0) || (loclc.length == 0) || (benefc.length == 0))
    {alert('Por favor, revisar el fomulario ingresado.  Hay campos obligatorios vacíos.');}
      else {alert ("Gracias por ponerse en contacto con nosotros.");}
  }
  
  const Boton2=document.querySelector("#Contacto2-enviar");
  Boton2.onclick = validarFormulario2();
