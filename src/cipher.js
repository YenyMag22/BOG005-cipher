const cipher = {
    encode: function (desplazamiento, mensaje) {
        console.log(desplazamiento, mensaje);
        if (desplazamiento == null || mensaje == [] || desplazamiento === 0) {
            throw new TypeError("error");

        }
        let resultado = "";
        for (let i = 0; i < mensaje.length; i++) {

            let codigoAcci = mensaje.charCodeAt(i);
            let mensajeCifrado = ((codigoAcci - 65 + desplazamiento) % 26) + 65;
            resultado += String.fromCharCode(mensajeCifrado);
        }
        //console.log(resultado);


        return resultado;
    },
    decode: function (desplazamiento, mensaje) {
        console.log(desplazamiento,mensaje);
        if (desplazamiento == null || mensaje == [] || desplazamiento === 0) {
            throw new TypeError ("incorrecto");
        }
        let resultado = "";
        for (let i = 0; i < mensaje.length; i++) {

            let codigoAcci = mensaje.charCodeAt(i);
            let mensajeDecifrado = ((codigoAcci + 65 - desplazamiento) % 26) + 65;
            resultado += String.fromCharCode(mensajeDecifrado);
        }
        console.log(resultado);
        return resultado;
    }
};
export default cipher;