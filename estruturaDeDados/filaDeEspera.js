let nomePaciente
let removido
let cont =""

alert("Bom dia")
let fila = []

let opcao = prompt(alert("Existem "+fila.length+" pacientes na fila\n"+
"O que deseja fazer?\n"+
"A)Novo Paciente - Será adicionado a fila de consulta\n"+
"B)Consultar Paciente\n"+
"C)Sair"
))

while(opcao != "c"){
if(opcao == "a"){
    nomePaciente = prompt(alert("Qual o nome do paciente que vai consultar?"))
    fila.push(nomePaciente)
    opcao = prompt("O que deseja fazer?\n"+
"A)Novo Paciente - Será adicionado a fila de consulta\n"+
"B)Consultar Paciente\n"+
"C)Sair")
}
else if(opcao == "b"){
    removido = fila.shift();
    alert("Paciente "+removido+" favor comparecer a recepção!")
        opcao = prompt("O que deseja fazer?\n"+
"A)Novo Paciente - Será adicionado a fila de consulta\n"+
"B)Consultar Paciente\n"+
"C)Sair")
}
else if(opcao == "c"){
    alert("Saindo...")
}
else {
    alert("opção inválida!")
    opcao = prompt("Escolhe uma das opções abaixo:\n"+
        "A)Novo Paciente - Será adicionado a fila de consulta\n"+
"B)Consultar Paciente\n"+
"C)Sair"
    )
}

}

for(let i = 0; i<fila.length;i++){
    cont +=(i+1)+"º "+fila[i]+"\n"
}


alert(fila)
alert(cont)