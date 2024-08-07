let textoInicial = "";
let textoFinal = "";

function capturarTexto(){
    textoInicial = document.getElementById('encriptador__texto').value;
}

function encriptarTexto(){
    capturarTexto();
    textoFinal = "";
    if(textoInicial === ""){
        textoFinal = "Ingresa el texto que desees encriptar o desencriptar.";
        
    } else {
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
        
    }
    mostrarResultado(textoFinal);

}

function desencriptarTexto(){
    capturarTexto();
    if (textoInicial == "") {
        textoFinal = "Ingresa el texto que desees encriptar o desencriptar.";   
        
    } else {
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
        
    }
    mostrarResultado(textoFinal);
}

function mostrarResultado(texto){
    document.getElementById('resultado__texto').innerText = texto;
    textoFinal = "";
    textoInicial = "";
}

function copiarTexto() {
    let textoParaCopiar = document.getElementById('resultado__texto').innerText;

    if (!navigator.clipboard) {
        // Fallback para navegadores que no soportan navigator.clipboard
        let textArea = document.createElement("textarea");
        textArea.value = textoParaCopiar;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            alert('Oops, no se pudo copiar el texto');
        }
        document.body.removeChild(textArea);
    } else {
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
        }).catch(err => {
            alert('Oops, no se pudo copiar el texto');
        });
    }
}

function ocultarObjetos(){
    document.getElementById('resultado__imagen').hidden = true;
    document.getElementById('resultado__vacio').innerHTML = "";
    document.getElementById('resultado__copiar').hidden = false;
}

function mostrarObjetos(){
    document.getElementById('resultado__imagen').hidden = false;
    document.getElementById('resultado__vacio').innerHTML = "Ningún mensaje fue encontrado";
    document.getElementById('resultado__copiar').hidden = true;
}

document.getElementById('encriptador__actuar').addEventListener('click', encriptarTexto);
document.getElementById('encriptador__revertir').addEventListener('click', desencriptarTexto);
document.getElementById('resultado__copiar').addEventListener('click', copiarTexto);