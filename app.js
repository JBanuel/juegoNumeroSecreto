let numeroSecreto;
let numeroIntentos;
let numerosPasados = [];
let numeroMaximo = 10;
console.log(numeroSecreto)

function asignarEtiqutaAElemento(etiqueta, texto) {
    let titulo = document.querySelector(etiqueta);
titulo.innerHTML = texto;
return;
}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
if (numeroDeUsuario === numeroSecreto){
    asignarEtiqutaAElemento('p', `Acertaste el número secreto en ${numeroIntentos} ${numeroIntentos == 1 ? 'intento' : 'intentos'}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (numeroDeUsuario > numeroSecreto){
        asignarEtiqutaAElemento('p','El numero es menor');
    }else{
        asignarEtiqutaAElemento('p','El numero es mayor');
    }
    reiniciarValor();
    numeroIntentos++;
}
return;
}
function condicionesIniciales() {
    asignarEtiqutaAElemento('h1', 'Juego del número secreto');
asignarEtiqutaAElemento('p', 'Aldivina un número del 1 al 10');
numeroSecreto = generarNumeroSecreto();
numeroIntentos = 1;
}
function generarNumeroSecreto(){
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo) +  1;
    if (numerosPasados.length == numeroMaximo){
        asignarEtiqutaAElemento('p','Ya adivinaste todos los numeros');
    }else{
        if (numerosPasados.includes(numeroAleatorio)){
            return generarNumeroSecreto();

        }else{
            numerosPasados.push(numeroAleatorio);
            console.log(numerosPasados)
            return numeroAleatorio;
        }
    }
}
function reiniciarValor(){
    document.querySelector('#valorUsuario').value = ''

}

condicionesIniciales();

function reiniciarJuego() {
    /*
    1. limpiar valor
    2. Indicar mensaje de intervalo de numero
    3. Generar numero aleatorio
    4. Deshabilitar boton de nuevo juego
    5. iniciar numero de intentos
    */
   reiniciarValor();
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}

