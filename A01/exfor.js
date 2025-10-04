/*const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
rl.question("Digite o numero que vai reduzido a zero", function(numero){
    numero = Number(numero);  
    for (let i = numero; i >= 0; i--) { 
        console.log(i);
    }
})
*/
/*
let numero = 1;
for (let i = numero; i <=20; i+=2 ){
    console.log(i)
}

let numero =8;
while (numero < 10){
    console.log("Numero menor que 10")
}
*/
function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
let i = 1
while(i <=99){
    console.log(i);
    i++
    await delay (1000)
}