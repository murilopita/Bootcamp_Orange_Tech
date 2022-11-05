//Exercícios

/*
    1) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    
    Formula do IMC:
    IMC = peso / (altura * altura)
    
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

//Funções Auxiliares
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
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

//Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));

})(); /* Funcão imediatamente invocada. Ela cria e se executa. */

/*

    2)Crie uma função que escreva o seu nome.

*/

function writeMyName(name) {
    console.log('My name is: ' + name + '!');
}

writeMyName('Murilo');

/*

    3)Crie uma função para verificar se é "Maior de idade".

*/

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log('Você é Maior de idade!');
    } else {
        console.log('Você não é Maior de idade! Chame um Responsável legal');
    }
}

verificarMaioridade(10);

/*
    4) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}

const precoNormal = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoNormal, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoNormal, 15));
} else if (formaPagamento === 3) {
    console.log(precoNormal);
} else {
    console.log(aplicarJuros(precoNormal, 10));
}



