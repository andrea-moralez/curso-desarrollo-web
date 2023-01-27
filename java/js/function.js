
/**
 document.getElementById ('boton'). onclick= function() {
    console.log ("Capturamos el evento Click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
    
 }


 document.addEventListener ('click', function (){
 console.log ("Hola Mundo desde EventListener");
 document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
 })
*/

 document.getElementById ('boton').addEventListener ('click', function (){
    console.log ("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
    })

 document.getElementById ('boton_color').addEventListener ('click', function (){
     document.body.style.backgroundColor = "#0000FF";
     document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
     })

  document.getElementById ('boton_default').addEventListener ('click', function (){
     document.body.style.backgroundColor = 'green';
     document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
     })

  document.getElementById ('boton_ocultar').addEventListener ('click', function (){
    document.getElementById("demo").style.display = 'none';
    
     })

 const collection = document.getElementsByClassName("prueba");
 for (let i = 0; i < collection.length ;i++) {
    collection[i].style.background = "orange";
 }