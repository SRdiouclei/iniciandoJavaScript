let baralho = []
contCartas = 0;
let option 
let carta

do{
option = prompt("O baralho esta com "+contCartas+" cartas adicionadas\n"+
        "Selecione a opção desejada:\n"+
        "A)Adicionar carta\n"+
        "B)Remover carta\n"+
        "C)Sair")

        switch(option){
            case "a":
                contCartas+=1;
                carta = prompt("Informe a carta que deseja adicionar ao topo do Baralho: ")
                baralho.push(carta)
                alert("A carta adicionada ao topo do baralho foi: "+carta)
                break
            case "b":
                carta = baralho.pop()
                alert("A carta removida do baralho foi: "+carta)
                contCartas -=1;
                break
            case "c":
                alert("Saindo...")
            break
            default:
                alert("A opção digitada é inválida!")
            break
        }
}while(option!="c")