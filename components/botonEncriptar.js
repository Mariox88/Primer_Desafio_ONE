import { textoNormal } from '../index.js';
import { textoEncriptado } from '../index.js';
export const encriptar = () => {
    if(textoNormal.value == "") {
        alert("El cuadro de texto no puede estar vacio");
    } 
    else {
        textoEncriptado.classList.remove("resultado");
        textoEncriptado.focus();
        textoEncriptado.value = encriptarMensaje(textoNormal.value)
        textoNormal.value = "";   
    }
}
const encriptarMensaje = (mensaje) => {
    let contador = 0;
    let temp = "";    
    while(contador < mensaje.length) {       
        if(mensaje[contador] == 'a')
                temp +='ai';
        else if(mensaje[contador] == 'e')
            temp +='enter';
        else if(mensaje[contador] == 'i')
            temp +='imes';
        else if(mensaje[contador] == 'o')
            temp +='ober';
        else if(mensaje[contador] == 'u')
            temp +='ufat';
        else
            temp += mensaje[contador];
        contador++;        
    } 
    return temp;
}