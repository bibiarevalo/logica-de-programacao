//2) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-o.
//Modifique os elementos do array de modo que a sequência de números fique do contrário.
//Ou seja, se digitou: 1,2,3
//Vai aparecer: 3,2,1

let array = []
for (let i = 0; i < 3; i++){
    let pergunta = parseInt(prompt("Digite um numero: "))
    array.push(pergunta)
}
alert(array.reverse())