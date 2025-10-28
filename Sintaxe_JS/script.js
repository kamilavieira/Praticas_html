// let numero1 = Number(prompt("Digite o número 1:"));

// if (numero1 < 5) {
//     console.log("O número é menor que 5.");
// } else if (numero1 > 5) {
//     console.log("O número é maior que 5.");
// } else {
//     console.log("O número é igual a 5.");
// }
// let numero1 = Number(prompt("Digite um numero de comparação:"));
// let numero2 = Number(prompt("Agora digite um numero a ser comparado:"));

// if(numero2 > numero1){
//     console.log(`${numero2} é maior que ${numero1}`);
//     document.writeln(`${numero2} é maior que ${numero1}`);
// }else if(numero2 < numero1){
//     console.log(`${numero2} é menor que ${numero1}`);
//     document.writeln(`${numero2} é menor que ${numero1}`)
// }else{
//     console.log(`Os números são iguas: ${numero2} = ${numero1}`);
//     document.writeln(`Os números são iguas: ${numero2} = ${numero1}`);
// }

let mode = prompt("Digite um modo de background (dark, red ou blue):");

switch(mode){
    case "dark":
        document.querySelector("body").style.backgroundColor = "black";
        document.body.style.color = "white";
        break;
    case "red":
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        break;
    default:
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
}

// let actualColor = false;
// function changeColor(){
//     if(actualColor){
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }else{
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     }
// }