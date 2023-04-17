/*
var nomes = [];
var quantiConvidados = Number(prompt('Digite o número de convidados: '));

for(i = 0;i < quantiConvidados; i++){
    nomes[i] = prompt('Digite o nome do convidado:'+ i);
}

  ------------------- comandos principais do array ---------------------------

O comando .push  insere dados no final do indice do array.
Exemplo:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania'];
  indices    0         1         2         3


nomes.push('Vitor');

nomes ficará:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices    0         1         2         3        4

  ========================================//========================================
O comando .pop();
Remove o ultimo indice colocado.
Exemplo:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices    0         1         2         3        4

nomes.pop();
nomes = ['Fellipe', 'Thiago', 'clicia', 'tania'];
  indices    0         1         2         3     

nomes.push('rodrigo');
nomes.push('denise');
nomes.pop();
nomes.push('deise');

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'rodrigo', 'deise'];
  indices    0         1         2         3         4          5

O nome 'denise' foi retirado da posição 5 e foi adicionado o nome 'deise' 

O comando .pop tambem alem de retirar pode atriburi em uma variavel nova apenas o elemento retirado.

Exemplo:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices    0         1         2         3        4

nomes.push('deise');
nomes.push('rodrigo');
var removido = nomes.pop();
nomes.push('denise');

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor', 'deise', 'denise'];
  indices    0         1         2         3        4       5           6

o nome 'rodrigo' foi removido deste array e adicionado em uma variavel chamada removido
seria a mesma coisa de colocar
removido = 'rodrigo';

========================================//========================================
O comando .unshift() adiciona assim com o .push(); porem em vez de ser no final ele adiciona no inicio;

Exemplo:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices    0         1         2         3        4

nomes.unshift('deise');

nomes = ['deise','Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices   0        1         2         3        4         5

========================================//========================================

O comando .shift() remove assim com o .pop(); porem em vez de ser no final ele remove no inicio;

Exemplo: 

nomes = ['deise','Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices   0        1         2         3        4         5

nomes.shift('deise');

nomes = [Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor'];
  indices   0        1         2         3        4        

========================================//========================================

O comando .length retorna a quantidade de indice que tem dentro do array.

Exemplo:

nomes = ['Fellipe', 'Thiago', 'clicia', 'tania', 'Vitor', 'deise', 'denise'];
  indices    0         1         2         3        4       5           6

console.log(nomes.length);
7

no caso 7 sao todos os indices, lembrando que começa de 0 mas o 0 ja conta como um indice.



========================================//========================================


O forEach(function(nome,indice){
    console.log(indice + " - " + nome)
});

a estrutura dele é .forEach();
dentro dos () é colocado a function ou seja fica assim
forEach(function(){});
e dentro da funtion é normal nos () da funtion eu passo os paramentros e dentro dos {} eu passo a ação.
*/



var nomes = ['Fellipe', 'Thiago', 'vitor'];

nomes.forEach(function(nome, indice){
    console.log(indice + '-' + nome);
});


