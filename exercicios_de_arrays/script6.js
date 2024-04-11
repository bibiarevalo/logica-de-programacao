//6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
//Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
//no primeiro Array.

let primeiroArray = [];
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i+1) + "º número:"));
    primeiroArray.push(numero);
}
let segundoArray = [];
for (let i = 0; i < primeiroArray.length; i++) {
    if (primeiroArray[i] % 2 !== 0) {
        segundoArray.push(primeiroArray[i]);
    }
}
alert(segundoArray);