import prompt from 'prompt-sync'
let ler = prompt()

function entradaDd(msg){

    console.log(msg)
    let n = Number(ler())

    return n

}   

function menu(){

    console.log(`Escolha uma opção:
    D - Depositar
    S - Sacar
    E - Exibir Saldo
    C - Cancelar Operação
    I - Calculando Simulação de Investimento
    Sair - Terminar Programa`)

    let escolha = ler().toUpperCase()
    
    return escolha

}

export{entradaDd ,menu}