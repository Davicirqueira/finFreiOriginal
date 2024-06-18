import prompt from 'prompt-sync'
let ler = prompt()

import { depositar, sacar, exibirSaldo, simnulandoInvestimento } from "./financeiro.js";
import { menu, entradaDd } from "./menu.js";

function app(){

    let cont = 0

    let A = []

    let s = entradaDd('Informe o valor do saldo:') 

    if(cont == 0){

        A[0] = s

        cont++

    }

    let c = true

    while(c){
        
        let esc = menu()

        if(esc == 'D'){

            s = depositar(s)
            console.clear()

            A[cont] = s

            cont++

        }

        else if(esc == 'S'){

            s = sacar(s)
            console.clear()

            A[cont] = s
            cont++

        }

        else if(esc == 'E'){

            let valor = exibirSaldo(s)

            console.clear()

            console.log(`O valor do seu saldo é: R$${valor}`)

        }

        else if(esc == 'C'){

            s = A[cont - 2]
            console.clear()

        }

        else if(esc == 'I'){

            let lucro = simnulandoInvestimento(s)

            console.clear()

            console.log(`O lucro obtido com o investimento é de: R$${lucro.toFixed(2)}`)

        }

        else if(esc == 'SAIR'){

            c = false
            
        }

        else{

            console.clear()

            console.log('Opção INEXISTENTE! Tente novamente!')
            
        }

    }

    return 'Obrigado por usar nosso sistema FinFrei'

}

export{app}