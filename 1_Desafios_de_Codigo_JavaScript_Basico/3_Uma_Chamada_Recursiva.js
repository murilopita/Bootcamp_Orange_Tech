// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets(5));

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
  if (n > 0){
    return n + somatorio(n - 1)
  } else{
    return 0
  }
}

print(somatorio(n))