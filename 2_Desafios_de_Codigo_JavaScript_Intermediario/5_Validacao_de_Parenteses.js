/*
Desafio

Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida.

Entrada: Uma string é considerada válida se:
    * Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida.

Saída: A saída corresponde a um valor Booleano como no exemplo abaixo:

Entrada: [ ], ( ), [ ).

Saída: true, true, false.
*/

const value = gets();
const stack = ['(',')','{','}','[',']'];


function isValid (s) {
  let i = 0;
  while( i < (s.length-1)) {
     if(stack.indexOf(s[i]) != -1){
        if(stack[stack.indexOf(s[i])+1] == s[i+1]){
            return true;
        }     
      }
    i++;
    return false;
    }
}

print(isValid(value));