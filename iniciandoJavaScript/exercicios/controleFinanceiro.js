alert("Olá, espero que esteja bem!\n"+"Bem vindo ao sistema de controle financeiro.")
let valor = parseFloat(prompt("Informe a quantidade de dinheiro Disponível: "))

do{
    alert("Quantidade de dinheiro disponível é de "+valor)
    opcao = prompt("Selecione a opção desejada:\n"+"A)Adicionar dinheiro a quantidade disponível\n"+"B)Remover dinheiro da quantidade disponível\n"+"C)Encerrar")
    let quantia;
        switch(opcao){
            case "a":
                quantia = parseFloat(prompt("Informe a quantidade de dinheiro que deseja adicionar: "))
                valor += quantia;
            break
            case "b":
                quantia = parseFloat(prompt("Informe a quantidade de dinheiro que deseja remover: "))
                valor -= quantia;
            break
            case "c":
                alert("Encerrando...")
            break
            default:
                alert("opção Inválida!")
        }
}while(opcao!="c")