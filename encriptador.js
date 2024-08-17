let textoInicial = "";
let textoFinal = "";

function capturarTexto(){
    textoInicial = document.getElementById('encriptador__texto').value;
}

function estaVacio(cadenaDeCaracteres){
    aux = cadenaDeCaracteres;
    return aux.trim().length === 0;
}

function validarTextoInicial(){
    capturarTexto();
    if(estaVacio(textoInicial)){
        alert("Ingrese el texto que desea encriptar o desencriptar.");
    } 
    
}

function encriptarTexto(){
    validarTextoInicial();
    for (let i = 0; i < textoInicial.length; i++) {
        let letra = textoInicial[i];
        switch (letra) {
            case 'e':
                textoFinal += 'enter';
                break;
            case 'i':
                textoFinal += 'imes';
                break;
            case 'a':
                textoFinal += 'ai';
                break;
            case 'o':
                textoFinal += 'ober';
                break;
            case 'u':
                textoFinal += 'ufat';
                break;
            default:
                textoFinal += letra;
            }
        }
    mostrarResultado(textoFinal);
    reestablecerValoresIniciales();
}

function desencriptarTexto(){
    validarTextoInicial();
    textoFinal = "";
    let i = 0;
    while (i < textoInicial.length) {
        if (textoInicial.substr(i, 5) === 'enter') {
            textoFinal += 'e';
            i += 5;
        } else if (textoInicial.substr(i, 4) === 'imes') {
            textoFinal += 'i';
            i += 4;
        } else if (textoInicial.substr(i, 2) === 'ai') {
            textoFinal += 'a';
            i += 2;
        } else if (textoInicial.substr(i, 4) === 'ober') {
            textoFinal += 'o';
            i += 4;
        } else if (textoInicial.substr(i, 4) === 'ufat') {
            textoFinal += 'u';
            i += 4;
        } else {
            textoFinal += textoInicial[i];
            i++;
        }
    }
    mostrarResultado(textoFinal);
    reestablecerValoresIniciales();
}

function mostrarResultado(texto){
    document.getElementById('resultado__obtenido').innerText = texto;
    ocultarObjetos();
}

function reestablecerValoresIniciales(){
    textoFinal = "";
    textoInicial = "";
}

function copiarTexto() {
    const textArea = document.getElementById('resultado__obtenido');
    if (textArea) {
        textArea.select(); // Selecciona el texto dentro del textarea
        try {
            document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
            alert('Texto copiado al portapapeles.');
        } catch (err) {
            alert('No se pudo copiar el texto.');
        }
    } else {
        console.error('No se encontró el textarea.');
    }
}


function mostrarObjetos(){
    mostrarObjeto("resultado__imagen");
    mostrarObjeto("resultado__vacio");
    mostrarObjeto("resultado__texto");
    ocultarObjeto("resultado__copiar");
    ocultarObjeto("resultado__obtenido");
}

function ocultarObjetos(){
    ocultarObjeto("resultado__imagen");
    ocultarObjeto("resultado__vacio");
    ocultarObjeto("resultado__texto");
    mostrarObjeto("resultado__copiar");
    mostrarObjeto("resultado__obtenido");
}

function mostrarObjeto(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.hidden = false;
    } else {
        console.error(`Elemento con ID ${id} no encontrado.`);
    }
}

function ocultarObjeto(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = 'none';
    } else {
        console.error(`Elemento con ID ${id} no encontrado.`);
    }
}

document.getElementById('encriptador__actuar').addEventListener('click', encriptarTexto);
document.getElementById('encriptador__revertir').addEventListener('click', desencriptarTexto);
document.getElementById('resultado__copiar').addEventListener('click', copiarTexto);