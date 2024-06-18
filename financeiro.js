import { entradaDd } from './menu.js'

//Depositando Saldo
function depositar(saldo){

    let continuar = true

    while(continuar){

        let dinDep = entradaDd('Quanto dinheiro deseja depositar?')
         

        if(dinDep > 0){
33
            continuar = false

            let v = saldo + dinDep

            return v

        }
    
    }

}

//Sacando Saldo
function sacar(saldo){

    let continuar = true

    while(continuar){

        let dinSac = entradaDd('Qual valor irá sacar?')
        
        if(dinSac > 0 && dinSac <= saldo){

            continuar = false

            let v = saldo - dinSac

            return v

        }

        else{

            console.log('Valor Indisponível! TENTE NOVAMENTE!!')

        }

    }

}

//Verificar Saldo
function exibirSaldo(saldo){

    return saldo

}

//Calcular Juros Compostos
function simnulandoInvestimento(capit){

    let taxaJuros = entradaDd('Informe o valor da taxa de juros:')

    let tempoInvest = entradaDd('Informe o período de tempo investido:')
    
    let calculo = (1 + (taxaJuros / 100) ) ** tempoInvest

    let calc = capit * calculo

    return calc

}


export{depositar, sacar, exibirSaldo, simnulandoInvestimento}