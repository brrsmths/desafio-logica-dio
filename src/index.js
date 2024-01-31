let nomeHeroi = "Alex";
let qntXp = 7
let nivelHeroi

if(qntXp<=1000){
    nivelHeroi = "Ferro"
} else if(qntXp==1001 || qntXp<=2000){
    nivelHeroi = "Bronze"
} else if(qntXp==2001 || qntXp<=5000){
    nivelHeroi = "Prata"
} else if(qntXp==5001 || qntXp<=7000){
    nivelHeroi = "Ouro"
} else if(qntXp==7001 || qntXp<=8000){
    nivelHeroi = "Platina"
} else if(qntXp==9001 || qntXp<=9000){
    nivelHeroi = "Ascendente"
} else if(qntXp==9001 || qntXp<=10000){
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log("O nome do seu heroi é " + nomeHeroi + " e ele está no nível " + nivelHeroi);