//const listaDeCompras = [];
//listaDeCompras[0] = "Abacate";
//listaDeCompras[1] = "Banana";
//listaDeCompras[2] = "Tomate";
/*
console.log(listaDeCompras)
*/

console.log("Array inicial com 8 elementos")
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr)

//Primeiro passo, aprendendo a adicionar elementos no Array:
// Primeira forma utilizada será o push, esta função sempre adicionará o elemento ao final do array
// Esta função devolve também o tamanho do array, podendo atribuir a uma variável para ser utilizada em outros casos
arr.push("Boromir")
console.log("Adicionando elementos ao final do array com a função Push");
console.log(arr)

//A função unshift serve para adicionar elementos ao começo do array.
// Esta função devolve também o tamanho do array, podendo atribuir a uma variável para ser utilizada em outros casos
arr.unshift("Boromir");
console.log("Adicionando elementos ao começo do array com a função Unshift");
console.log(arr)

//Para remover um elemento ao final do Array usa se a função pop
// Esta função devolve o elemento removido, podendo por exemplo adicionar este a uma variável
arr.pop();
console.log("Removendo o último elemento do array com a função pop sem adicionar o elemento a uma variável")
console.log(arr)
let removidoFinal = arr.pop()
console.log("Removendo o último elemento e o adicionando a uma variável que pode ser chamada")
console.log(arr)
console.log("Elemento removido do final do array acima = "+removidoFinal)

//Para remover elementos no inicio do array usa se a funçõa shift
arr.shift();
console.log("Removendo o primeiro elemento do array com a função shift sem adicionar o elemento a uma variável")
console.log(arr)
let removidoInicio = arr.shift();
console.log("Removendo o primeiro elemento do array com a função shift e adicionando o elemento a uma variável")
console.log(arr)
console.log("Elemento removido do inicio do array acima = "+removidoInicio)

//A função includes serve para pesquisar dentro de um array. Verificando se algo esta presente no mesmo e devolvendo o valor verdadeiro ou falso

const inclui = arr.includes("Gandal")
console.log(arr)
console.log("O valor pesquisado acima esta incluso no array? "+inclui)

//Para saber o indice de um elemento usa se a função indexOf, neste caso a função retorna a posição do elemento pesquisado dentro do array.

const indice = arr.indexOf("Gandalf")
console.log(arr)
console.log("O valor pesquisado acima esta incluso na posição: "+indice)

//Para cortar e concatenar os arrays usa se as seguintes funções
//slice =  cortar. cria uma cópia de uma parte do array o atribuindo a outro array
//Indicase neste caso na sintaxe o inicio e o fim para o corte do array, o array inicial não é alterado de nenhuma forma, seria mais uma cópia mesmo
console.log(arr)
const corte = arr.slice(0,4);
console.log("Array cortado do array inicial: "+corte)
console.log(arr)
//Pode também ser feito o corte do Array de trás para frente usando o sinal de menos (-) que neste caso faz a leitura de trás pra frente
console.log("Cortando(copiando) indices do elemento de trás pra frente:")
console.log(arr)
const corteReverso = arr.slice(-4);
console.log("elementos cortados de trás pra frente: "+corteReverso)


//para concatenar arrays, usa se a função concat
//junta os elementos, adicionando ao final do array e jogando em uma variável
//Pode se ainda usar virgula e passar mais valores em sequencia como strings, numbers
//Segue exatamente a ordem que é informado

console.log("Concatenando alguns arrays :\n"
    +"Os arrays concatenados serão os seguintes:"
)

console.log(corte)
console.log(corteReverso)
console.log("Adicionarei ainda as palavras Diouclei e Hérica e mais o número 8")

const concatenado = corte.concat(corteReverso,"Diouclei","Hérica",7)
console.log(concatenado)


//fazendo substituição de um grupo de elementos ou os remvendo no caso os substituindo por nada
// Para remover um grupo de elementos do array e substituir por outros, usa se a função SPLICE
// A sintaxe é primeiro informar de onde vai partir a remoção, depois informar quantos elementos serão removidos e por último o que vai substituir 
console.log("Array inicial(Sem remoção ou substituição)")
console.log(concatenado)
console.log("feita a remoção do elementos 0 sendo somente 1 remoção e substituido pelo nome Diones pelo anterior Sam")
const substitui = concatenado.splice(0,4,"Diones","Dione","Dion","Dio","Di")
console.log(concatenado)
console.log(substitui)


//Iterar sobre os elementos do array
//Percorrer o array
// Usa se no caso as estruturas de retição como por exemplo o for

for(let i=0;i<concatenado.length;i++){
    let elemento = concatenado[i];
    alert(elemento+" se encontra na posição "+i);
}