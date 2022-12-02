//Desafio

//O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

//Entrada

//A entrada consiste em um valor inteiro positivo N.

//Saída

//A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".

function fatorial (n) {
 var total = 0;

 if (n>=4) {
  for (let i=1; i<n-1; i= i+3) {
   if (total === 0) { //1o loop
    total = Math.round(n * (n-i) / (n-2*i) + (n-3*i));
   } else if ((n-i)>=4) {
    total = Math.round(total - (n-i) * (n-i-1) / (n-i-2) + (n-i-3));
    i++; //pq tem que ser i+4 a partir do 2o loop
   } else if ((n-i) == 3) {
    total = total - 3 * 2;
   } else if ((n-i) == 2) {
    total = total - 2;
   }
  }
  return total;
   
 } else if (n==3) {
   return total = 3 * 2;
 } else if (n==2) {
   return total = 2;
 }
}

console.log(fatorial(n));