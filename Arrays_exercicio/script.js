let diaSelect = document.getElementById('dia');
//let diaSelect = document.querySelector('#dia'); //forma mais curta da anterior 

for (let dia = 1; dia <= 31; dia++) {
    let optionD = document.createElement(`optionD`);
    optionD.value = dia;
    optionD.textContent = dia;
    diaSelect.appendChild(optionD);
}
//forma curta de se fazer o laço de cima
/* for (let d = 1; d < 32; d++){
    dia.innerHTML += `<option>${d}</option>`;
}*/

let mesSelect = document.getElementById('mes');
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let i = 0; i < meses.length; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = meses[i];
    mesSelect.appendChild(option);
}

/* let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for(let m = 0; m < 12; m++){
    mes.innerHTML += `<options>${meses[m]}</options>`
}
 */

let anoSelect = document.getElementById('ano');
let anoAtual = new Date().getFullYear(); //pega a data atual mas só pega o ano atual: 24/04/2025 --> 2025

for (let ano = anoAtual; ano >= anoAtual - 60; ano--) {
    let option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    anoSelect.appendChild(option); //cria uma nova seleção/option
}

/*
let anoAtual = new Date().getFullYear();
for(let a = anoAtual; a>=anoAtual - 60; a--){
    ano.innerHTML += `<option>${a}</option>`;
}
*/


// function fillSelectDay(id, limit){
//     for(i = 1; i < limit; i++){
//         id.innerHTML += `${i}`;
//     }
// }

// let dia = document.getElementById('dia');

// fillSelectDay(dia, 32);