import { textoNormal } from '../index.js';
import { textoEncriptado } from '../index.js';
export const copiar = () => {
    if(textoEncriptado.value == '')
        alert('No hay ningun mensaje para copiar');
    else {
        navigator.clipboard.writeText(textoEncriptado.value).then(() => {
            alert('Mensaje Copiado');            
        });               
    }
}
export const limpiar = () => {
    textoNormal.value = '';
    textoEncriptado.value = '';
    textoEncriptado.classList.add('resultado');
}