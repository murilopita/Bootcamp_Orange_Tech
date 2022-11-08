/* 
    1) Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado. 

    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    distancia;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
        
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return  distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

    
}

const uno = new Carro('Fiat', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10);

console.log(uno.calcularGastoDeViagem(70, 5).toFixed(2));
console.log(palio.calcularGastoDeViagem(70, 5).toFixed(2));

/*
    2) Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura.
    
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do Peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave'
        }

    }

}

const jose = new pessoa('José', 70, 1.75);
const murilo = new pessoa('Murilo', 100, 1.75);

console.log(jose.calcularImc().toFixed(2));
console.log(murilo.calcularImc().toFixed(2));

console.log(jose.classificarImc());
console.log(murilo.classificarImc());