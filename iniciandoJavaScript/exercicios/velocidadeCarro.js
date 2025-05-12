let velocidade = parseFloat(prompt("Informe a velocidade do veículo: "));

while(velocidade>0){
    alert("O carro esta a "+velocidade+" km/h");
    velocidade -= 20;
    alert("A velocidade esta diminuindo.");
}

if(velocidade === 0){
    alert("O carro esta parado!");
}