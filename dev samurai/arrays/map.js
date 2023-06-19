 var numeros = [1,2,3,4,5,6,7]

 var dobrados = numeros.map(function(item){ 
    return item*2;
});
console.log(dobrados);

//----------------------------------------------------------------

var convidados = [
{nome: "fellipe", vip: true, idade: 21},
{nome: "tHiago", vip: true, idade: 22},
{nome: "viToR", vip: true, idade: 23}];

var convidadosNormal = convidados.map(function(item){
    
    return Object.assign(item,{nome: item.nome.toUpperCase()});
    
});
/* O RETURN OBJECT.ASSIGN ele mantem a origem (item) e modifica apenas o destino
no exemplo acima ele vai manter o vip e a idade e so vai mudar o objeto nome*/
console.log(convidadosNormal);

