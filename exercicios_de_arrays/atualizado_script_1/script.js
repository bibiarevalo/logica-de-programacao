/*1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
montar seu sorvete com até 3 bolas (sabores).
Criar um programa que simule esse sistema:
1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido

== MENSAGENS e VALIDAÇÕES ==
1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
2 -&gt; Sabor removido! OU Não existem sabores adicionados!
3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
sabores!
4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!*/

let sabores = []
let opcao = -4

while (opcao != 0) {
    let menu = Number(prompt("Escolha uma opção: \n(1)Add um sabor \n(2)Remover sabor \n(3)Visualizar sorvete \n(4)Finalizar pedido \n(0)Sair"))

    switch (menu) {
        case 1:
            if (sabores.length > 3) {
                alert("Limite de sabores atingidos")

                let remover_sabor = prompt("Digite o sabor que deseja remover: " + sabores)
                let index = sabores.findIndex(obj => obj == remover_sabor)
                sabores.splice(index, 1)

                alert(sabores)

            } else {
                let add_sabor = prompt("Digite o sabor que deseja adicionar:")
                sabores.push(add_sabor)
                alert("Sabor adicionado!")
            }


            break;

        case 2:
            if (sabores.length !== 0) {
                let remover_sabor = prompt("Digite o sabor que deseja remover: "
                    + sabores)
                let index = sabores.findIndex(obj => obj == remover_sabor)
                sabores.splice(index, 1)
                alert(sabores)
            } else {
                alert("não existe sabores adicionados")
            }

            break

        case 3:
            if (sabores.length > 0) {
                let sorvete = "";
                sabores.forEach((sabor, index) => {
                    sorvete += (`Camada ${index + 1} - ${sabor}\n `);
                });
                alert(sorvete);
            } else {
                alert("Seu sorvete não possui sabores!");
            }
            break

        case 4:
            if (sabores.length = 3) {
                alert("pedido realizado")
            } else {
                alert("Adicione pelo menos um sabor")
            }
            break
        case 0:
            alert("Sair do programa");
            break;

        default:
            alert("vc saiu do programa")

    }

}