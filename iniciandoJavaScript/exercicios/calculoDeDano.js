let ataqueNome = prompt("Informe o nome do personagem que vai atacar: ");
let ataquePoder = parseFloat(prompt("Informe o Poder de ataque do personagem : "));

let defesaNome = prompt("Informe o nome do personagem que vai receber o ataque: ");
let defesaVida = parseFloat(prompt("Informe quantos pontos de vida tem o personagem: "));
let defesaPoder = parseFloat(prompt("Informe o poder de defesa do personagem: "));

let escudo = confirm("O personagem possui escudo? ");

if(ataquePoder > defesaPoder && escudo == false){
    alert("Dano de ataque : "+(ataquePoder-defesaPoder));
    alert("Informações dos personagens: \n"+
        "Nome: "+ataqueNome+"\n"+
        "Poder de ataque: "+ataquePoder);
    alert("Personagem de Defesa\n"+
        "Nome: "+defesaNome+"\n"+
        "Poder de defesa: "+defesaPoder+"\n"+
        "Sem Escudo\n"+
        "Pontos de vida: "+(defesaVida-(ataquePoder-defesaPoder))
    );
}
else if(ataquePoder > defesaPoder && escudo == true){
    alert("Dano de ataque : "+((ataquePoder-defesaPoder)/2));
    alert("Informações dos personagens: \n"+
        "Nome: "+ataqueNome+"\n"+
        "Poder de ataque: "+ataquePoder)
    alert("Personagem de Defesa\n"+
        "Nome: "+defesaNome+"\n"+
        "Poder de defesa: "+defesaPoder+"\n"+
        "Possui Escudo\n"+
        "Pontos de vida: "+(defesaVida-((ataquePoder-defesaPoder)/2))
    )
}
else{
    alert("Dano de ataque : 0 ")
    alert("Informações dos personagens: \n"+
        "Nome: "+ataqueNome+"\n"+
        "Poder de ataque: "+ataquePoder)
    alert("Personagem de Defesa\n"+
        "Nome: "+defesaNome+"\n"+
        "Poder de defesa: "+defesaPoder+"\n"+
        "Pontos de vida: "+defesaVida
    )
}