/*var produtos = {'Esporte':[{id:1, nome: 'bola', cor: 'verde', tamanho: 'unico',}]};


//usando filter com numeros
var numeros = [10,18,1,15];



var novosNumeros = numeros.filter(function(item){
    return item > 10;
});
console.log(novosNumeros);

-----/----------------------------------------------
//usando filter com strings
var nomes = ['Fellipe', 'Thiago', 'Vitor','Fernando'];

var convidados = nomes.filter(function(item){
    return item.charAt(0) == 'F';
});
console.log(convidados);

-----/----------------------------------------------
//Usando filter com numeros de separação (par, impar)
 var numeros = [10,18,1,15,2,12,21,33,100];

var pares = function(item){
    return !(item%2);
}

var impares = function(item){
    return item % 2;
}

var numerosPares = numeros.filter(pares);

var numerosImpares = numeros.filter(impares);

-----/----------------------------------------------

//usando filter com arrays de objetos*/

var filmes = [
    {titulo: 'Titanic', Duração: 203, nota: 7.5},
    {titulo: 'Titanic', Duração: 203, nota: 9.5},
    {titulo: 'Titanic', Duração: 203, nota: 6.5},
]