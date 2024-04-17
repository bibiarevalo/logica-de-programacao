let contador = 0 
for(let i = 0; i < 3 ; i++){
    let notas = parseFloat(prompt('Digite sua nota: '))
    contador += notas
}
let media = contador / 3

let conferirNotas = media >= 7  ? 'Aprovado' : media < 3 ?  'reprovado' : 'RECUPERAÇÃO'

alert(`${conferirNotas} - média final: ${media.toFixed(2)}`)

