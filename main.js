// Escribir el código solamente en este archivo
contador=2
function promtMessage(){
    
    var sign = prompt("Ingrese su nombre de usuario porfavor ");
    document.getElementById("usuario").innerHTML= "bienvenido " + sign
    

}


document.getElementById("intro").addEventListener("click", function elementoDestacado(){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    if (first.classList.contains("alt")){
        first.classList.remove("alt");
        second.classList.add("alt")
    } else{
        second.classList.remove("alt");
        first.classList.add("alt");
    }
});
function addRow() {
    contador = contador +1 
    var item = document.createElement("div");
    item.className= "col-4 col-6-medium col-12-small list-element"
    var seccion = document.createElement("section");
    seccion.className = "box";
    var header = document.createElement("header");
    var h3 = document.createElement("h3");

    var texto = document.createTextNode("item "+ contador);
    var parraf = document.createElement("p");
    var parrafo = document.createTextNode("Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.");
    parraf.appendChild(parrafo)
    h3.appendChild(texto);
    header.appendChild(h3);
    header.appendChild(parraf)
    seccion.appendChild(header);
    item.appendChild(seccion)
    document.getElementById("items").appendChild(item);

}
   


   

