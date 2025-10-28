// let names = ["josé", "claudio", "renata", "diogo"];
// console.log(names[0]);
//let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
//     numeros[i] += 1;
// }

// console.log(numeros); // [2, 3, 4, 5, 6]
// document.writeln(numeros);

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     document.writeln(i);
//     i++;
// }

let array = [1, 2, 3, 4, 5];
console.log(array);

for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    console.log("volta: ", index);
    console.log("valor que está ocupando o index: ",array[index])
    array[index] += 1;
    console.log("valor atualizado do index: ",array[index]); 
}

console.log(array);
