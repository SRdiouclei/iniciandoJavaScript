let resultado = "";

let number = parseFloat(prompt("informe o nº que gostaria da tabuada até o 20: "))

for(let i = 1; i <=20;i++){
    let x = number * i;
    resultado += number +" X "+i+" = "+x+"\n";
}

alert(resultado)