let nome = prompt("Informe seu nome: ");

alert("Olá "+nome+" Espero que esteja bem!")

let opcao = prompt("Já visitou alguma cidade a turismo? \n"+"A)SIM\n"+"B)NÂO")
let cidade = "";
let contagem = 0;

    while(opcao =="a"){
    cidade +=prompt("Qual cidade visitou?")+"\n";
    opcao = prompt("mais alguma cidade visitada?\n"+"A)SIM\n"+"B)NÂO");
    contagem++
    }


    alert("Turista nome: "+nome+"\n"+"Cidades visitadas: "+contagem+"\n"+cidade)

