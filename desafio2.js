mediaRanked(50,18);

function mediaRanked(vitorias, derrotas){
    
    let saldoRanked = vitorias - derrotas;
    
    if (saldoRanked < 10){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível ferro `)
    } else if(saldoRanked >= 11 && saldoRanked <= 20){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível bronze `)
    } else if(saldoRanked >= 21 && saldoRanked <= 50){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível prata `)
    } else if (saldoRanked >= 51 && saldoRanked <= 80){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível ouro `)
    } else if(saldoRanked >= 81 && saldoRanked <= 90){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível diamante `)
    } else if(saldoRanked >= 91 && saldoRanked <= 100){
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível lendario `)
    } else {
        console.log(`O herói tem de saldo ${saldoRanked} e está no nível imortal `)
    }
    
    return saldoRanked;
}




//console.log(`O herói tem de saldo ${mediaRanked(90,18)} e está no nível `)