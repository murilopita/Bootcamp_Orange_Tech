//Desafio

//Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. Logo, NÃO é um Palíndromo. Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.

//Entrada: A entrada consiste em um palavra.

//Saída: Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let str1 = gets();
let strInvertida = reverseString(str1);

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function reverseString(str) {
    
  var splitString = str.split("");// Passo 1. Use o método split() para retornar um novo array
  var reverseArray = splitString.reverse();// Passo 2. Use o método reverse() para inverter o array recém-criado
  var joinArray = reverseArray.join("");// Passo 3. Use o método join() para unir todos os elementos do array em uma string
  return joinArray;// Passo 4. Retorne a string invertida
}

function palindromos() {
 if (str1 === strInvertida) {
  return "TRUE";
  } else {
    return "FALSE";
    
  }
}

print(palindromos());

