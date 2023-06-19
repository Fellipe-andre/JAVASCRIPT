var valores = [1.5,2,4,10];
// 17.5 


var media = valores.reduce(function(total, item, indice, array){
    
    total = total + item;

    if (indice == array.length - 1){
       return total/array.length;
    }
    return total;
});
console.log(media);

//----------------------------------------------------------------

var numeros = [10,18,1,15,2,12,21,33,100];

var pares = function(item){
    return !(item%2);
};

var dobrados = function(item){
    return item * 2;
};


var numDobrados = numeros.filter(pares).map(dobrados);

console.log(numDobrados);
//----------------------------------------------------------------

var carros = [
                {marca: 'audi', cor: 'preto'},
                {marca: 'audi', cor: 'branco'},
                {marca: 'ferrari', cor: 'vermelho'},
                {marca: 'ford', cor: 'branco'},
                {marca: 'peugot', cor: 'branco'}
];

var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuario'},
    {id: 456, nome: 'Tenis', cor: 'preto', tamanho: 'G', categoria: 'Vestuario'},
    {id: 789, nome: 'Bola', cor: 'preto', tamanho: 'G', categoria: 'Esporte'},
    {id: 012, nome: 'complemento', cor: 'preto', tamanho: 'G', categoria: 'Saude'},
];

function groupBy(array, prop){
    var value = array.reduce(function(total, item){
        var key = item[prop];//item.marca

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {});  
    
    return value;
};

var novosProdutos = produtos.filter(function(item){
    return item.categoria == 'Vestuario';
});
var agrupados = groupBy(novosProdutos, 'categoria');
console.log(agrupados);