import { textoNormal } from '../index.js'
import { textoEncriptado } from '../index.js'
export const desencriptar = () => {
    if(textoNormal.value == "") {
        alert('El cuadro de texto no puede estar vacio');
    }
    else {
        var mensajeTemp = desencriptarMensaje(textoNormal.value)
        if(textoNormal.value == mensajeTemp)
            alert('El texto no puede simplificarse más');
        else
        {
            textoEncriptado.value = desencriptarMensaje(textoNormal.value)
            textoNormal.value = "";
        }        
    }    
}
const desencriptarMensaje = (mensaje) => {
    let temp = mensaje;
    temp = temp.replace(/ai/g, "a");
    temp = temp.replace(/enter/g, "e");
    temp = temp.replace(/imes/g, "i");
    temp = temp.replace(/ober/g, "o");
    temp = temp.replace(/ufat/g, "u");    
    return temp;
}