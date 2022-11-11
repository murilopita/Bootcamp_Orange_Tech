// 1)Crie um programa que dado um número imprima a sua tabuada.

const numero = 7;

for (let i = 1; i <= 10; i++) {
    
    const tabuada = i * numero;
    console.log(tabuada);
    
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrando.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    let numero = i;
    if(numero % 2 === 0){
        console.log(numero);
    }

}

