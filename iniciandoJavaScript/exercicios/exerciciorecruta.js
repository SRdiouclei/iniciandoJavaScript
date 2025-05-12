let nome = window.prompt("Informe o Primeiro nome: ");
let sobrenome = window.prompt("Informe o sobrenome: ");
let anoDeNascimento = window.prompt("Informe o ano de nascimento: ");
let estudo = window.prompt("Qual seu campo de estudo? ")
let nomeCompleto = nome + " "+sobrenome;
let idade = 2025 - anoDeNascimento;

console.log("Recruta: "+nomeCompleto+" - idade: "+idade+" anos "+"Campo de estudo: "+estudo);

alert(
    "Recruta Cadastrado com Sucesso!!!\n" +
    "Nome Completo: "+nomeCompleto + "\n "+
    "Campo de Estudo: "+estudo + " \n"+
    "Idade : "+idade+" anos"
)

