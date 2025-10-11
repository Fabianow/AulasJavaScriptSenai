const { Console } = require("console");
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let numero1 
let numero2 


 
rl.question("Digite o primeiro numero", function(numero1){
    numero1 = Number(numero1);   
    rl.question("Digite o segundo numero numero", function(numero2){
        numero2 = Number(numero2);   
        rl.question("Qual a operação que voce quer? \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha: ", function(opp) {
            const operacao = Number(opp); 
        
        switch (operacao) {
            case 1:
                  //numero3 = numero1 + numero2
                console.log("O resultado da adição é", numero1+numero2)
                break;
                case 2:
                     //numero3 = numero1 - numero2
                    console.log("O resultado da subtração é",numero1-numero2)
                break;
                case 3:
                     //numero3 = numero1 * numero2
                    console.log("O resultado da multiplicação é",numero1*numero2)
                break;
                case 4:
                   // numero3 = numero1 / numero2
                    console.log("O resultado da divisão é",numero1/numero2)
                break;
        
            default:
                break;
        }   
        rl.close()
    })
})
})