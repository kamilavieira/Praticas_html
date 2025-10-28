//const mensageElement = document.getElementById('message');
//mensageElement.textContent = 'Olá Mundo! Cheguei nessa bagaça com meu primeiro Hello World com JavaScript!';

// document.writeln("<h1>Olá Mundo! Cheguei nessa bagaça com meu primeiro Hello World com JavaScript!</h1>");

// let nome = prompt("Digite seu nome:");
// document.writeln(`Olá ${nome}! Seja muito bem-vindo(a)!`);
// console.log(`Olá ${nome}! Seja muito bem-vindo(a)!`);
// //console.log(prompt("Digite seu nome:"));

// let num1 = Number(prompt("Digite o primeiro número:"));
// //document.writeln(`${num1}`);
// console.log(num1);
// let num2 = Number(prompt("Digite o segundo número:"));
// //document.writeln(`${num2}`);
// console.log(num2);
// let result = num1 + num2;
// document.writeln(`O resultado é: ${result}`);
// console.log(result);

// function boasVindas(nome){
//     document.writeln(`<h1>Olá ${nome}!</h1>`);
// }

// boasVindas("Kamila");

// function somar(numero1, numero2) { 
//     //document.writeln(`<h1>O resultado da soma é: ${numero1+numero2}</h1>`); ação que é realizada, não é retrun
//     console.log(numero1 + numero2);
//     return numero1 + numero2;
// }

// somar(2,5);
// somar(5,3);

// document.writeln(`<h1>O resultado é ${somar(5,3)}</h1>`);

// document.getElementById("nome").addEventListener("change", function() {
//     console.log("Nome atualizado:", this.value);
//     document.writeln(`${this.value}`);
// });

// function Pessoa() {
//     this.idade = 0;
//     setInterval(() => {
//         this.idade++;
//         console.log(this.idade); // `this` refere-se ao objeto Pessoa
//     }, 1000);
// }

// Pessoa();

 function fillSelects(tag, limit){
    for (let i = 1; i < limit; i++){
        tag.innerHTML += `<option>${i}</option>`;
     }
 }

let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
fillSelects(dia, 32);
fillSelects(mes,13);

let pessoa = {
    nome:"Kamila",
    idade:33,
    genero:"feminino",
    habilidades: ["Kotlin", "ingles avançado", "Azure", "CSS"],
    rosto: {
        olhos: "castanhos escuros",
        cabelo:"castanho escuro",
        falar: () => console.log("falei!"),
    },
    corpo: {
        temTatuaagem: "não (ainda)",
        pele: "clara",
        andar: () => console.log("andei"),
    }

}

let subtrair = (a, b) => {console.log(`${a-b}`)};

localStorage.setItem("nome", "Agathario");
//setTimeout(()=>{alert("Olá mundo!")}, 3000);
//setInterval(() => {console.log("olá")}, 3000);

// let numero = parseInt(prompt("Digite um número:"));
// if (numero > 5) {
//     console.log("O número é maior que 5");
// } else if (numero < 5) {
//     console.log("O número é menor que 5");
// } else {
//     console.log("O número é igual a 5");
// }
