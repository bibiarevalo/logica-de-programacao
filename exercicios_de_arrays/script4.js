//4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
//Matemática. Calcular a média de todas as notas acima de 5,0.


let nomesAlunos = [];
let notas = [];
for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do aluno:");
    nomesAlunos.push(nome);

    let nota = parseFloat(prompt("Digite a nota do aluno (0-10):"));
    notas.push(nota);
}
let somarNotas = 0;
let contador = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 5) {
        somarNotas += notas[i];
        contador++;
    }
}
let media = 0;
if (contador > 0) {
    media = somarNotas / contador;
}
alert("A média das notas acima de 5 é: " + media.toFixed(2));