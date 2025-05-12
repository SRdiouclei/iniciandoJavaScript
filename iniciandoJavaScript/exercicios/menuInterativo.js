let escolha = "";

do{
    escolha = prompt("Olá! Tudo bem?\n"+"Escolha uma das opções abaixo para seguir o atendimento:\n"
    +"A)Deus é Amor!\n"
    +"B)Jesus Salva.\n"
    +"C)Jesus ama Você!\n"
    +"D)Todas as coisas coperam para o BEM!\n"
    +"E)Encerrar"
)
    switch(escolha){
        case "a":
            alert("Deus ama você, mesmo que não tenha tempo pra ele!")
        break
        case "b":
            alert("Jesus Morreu na Cruz pelos nossos pecados.")
        break
        case"c":
            alert("Jesus te ama em todos os sentidos e de todas as formas.")
        break
        case "d":
            alert("Mesmo que tudo pareça difícil não perca a fé, Deus acredita em você!")
        break
        case "e":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
}while(escolha != "e")