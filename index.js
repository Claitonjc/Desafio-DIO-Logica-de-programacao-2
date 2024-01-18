let level
let winningBalance = rank(15, 10)

function rank(victories, defeats){
    return victories - defeats
} 

if(winningBalance <= 10){
    level = "Ferro"
} else if(winningBalance >= 11 && winningBalance <=20){
    level = "Bronze"
} else if(winningBalance >= 21 && winningBalance <= 50){
    level = "Prata"
} else if(winningBalance >= 51 && winningBalance <= 80){
    level = "Ouro"
} else if(winningBalance >= 81 && winningBalance <=90){
    level = "Diamante"
} else if(winningBalance >= 91 && winningBalance <= 100){
    level = "Lendário"
} else{
    level = "Imortal"
}

console.log(`O Herói tem saldo de ${winningBalance} e está no nível ${level}`)