// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets(3));
var N = parseInt(gets(18));
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

let soma = 0;

for (i = a; i <= N; i++) {
  if (i % a === 0) {
    soma += i
  }
}

print(soma);