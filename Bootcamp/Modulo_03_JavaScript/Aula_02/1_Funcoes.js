//Funções

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));

//Modelo de Organização

function funcaoAuxiliar () {

}

function main() {
    console.log('Programa Principal');
    funcaoAuxiliar();
}

main();