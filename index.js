let nomeHeroi = "Thor";
let xpHeroi = 8500;
let pontosDeVidaHeroi = 100;
let msgFinal = "O Herói "+ nomeHeroi + " está no nível ";

if(xpHeroi <= 1000) {
    console.log(msgFinal + "Ferro");
}else if(xpHeroi >= 1001 && xpHeroi <= 2000) {
    console.log(msgFinal + "Bronze");
}else if(xpHeroi >= 2001 && xpHeroi <= 6000) {
    console.log(msgFinal + "Prata");
}else if(xpHeroi >= 6001 && xpHeroi <= 7000) {
    console.log(msgFinal + "Ouro");
}else if(xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log(msgFinal + "Platina");
}else if(xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log(msgFinal + "Ascendente");
}else if(xpHeroi >= 9001 && xpHeroi <= 10000) {
    console.log(msgFinal + "Imortal");
}else if(xpHeroi >= 10001) {
    console.log(msgFinal + "Radiante");
}

/*
erro no exercicio com a classificação
Ex: final valor prata 5000, inicio valor ouro 6001
sem definição entre 5000 e 6000

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/