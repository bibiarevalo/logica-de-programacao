//5) Localizar o maior valor dentro de um array de números
var numeros = [29, 7, 8, 4, 15, 3];

var numero_maior = numeros[0];

for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > numero_maior) {
        numero_maior = numeros[i];
    }
}

alert("O maior valor no array é: " + numero_maior);