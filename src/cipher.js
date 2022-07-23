const cipher = {
    encode: function (desplazamiento, mensaje) {
        let resultado = "";
        for (let i = 0; i < mensaje.length; i++) {

            let codigoAcci = mensaje.charCodeAt(i);
            let mensajeCifrado = ((codigoAcci - 65 + desplazamiento) % 26) + 65;
            resultado += String.fromCharCode(mensajeCifrado);
        }
        console.log(resultado);
        return resultado;
    }
};
export default cipher;