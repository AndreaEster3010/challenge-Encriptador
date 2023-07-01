var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var resultado = document.querySelector(".contenedor_resultado");
var munieco = document.querySelector(".contenedor_munieco");
var contenedor = document.querySelector(".contenedor_parrafo");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var contenedor_texto = recuperarTexto();
    resultado.textContent = encriptarTexto(contenedor_texto);
}
function desencriptar(){
    ocultarAdelante();
    var contenedor_texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(contenedor_texto); 
}
function recuperarTexto(){
    var contenedor_texto = document.querySelector(".contenedor_texto");
    return contenedor_texto.value

}
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
    if(texto[i]=="a"){
        textoFinal = textoFinal + "ai"
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
             i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
             i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
             textoFinal = textoFinal + texto[i];
        }
    }
     return textoFinal;
}
const btnCopiar = document.querySelector(".boton_copiar");
btnCopiar.addEventListener ("click", copiar = () =>{
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Hola");
})
