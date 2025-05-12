let metros = parseFloat(prompt("Informe o valor em metros que deseja converter: "));

let opcao = prompt("Informe para qual unidade de medida deseja converter o valor: \n"+
    "A)Milímetros (mm)\n"+"B)Centímetros(cm)\n"+"C)Decímetro(dm)\n"+"D)Decâmetro(dam)\n"+"E)Hectometro(hm)\n"+"F)Quilômetro(km)"
);

switch(opcao){
    case "a":
        alert("A medida de "+metros+" metros convertida em milimetros é de: "+(metros*1000)+"mm");
    break
    case "b":
        alert("A medida de "+metros+" metros convertida em centímetros é de: "+(metros*100)+"cm");
    break
    case "c":
        alert("A medida de "+metros+" convertida em decimetros é de: "+(metros*10)+"dm");
    break
    case "d":
        alert("A medida de "+metros+" convertida em decâmetros é de: "+(metros/10)+"dam");
    break
    case "e":
        alert("A medida de "+metros+" convertida em hectometros é de: "+(metros/100)+"hm");
    break
    case "f":
        alert("A medida de "+metros+" convertida em quilômetros é de: "+(metros/1000)+"km");
    break
    default:
        alert("Opção inválida!");
}