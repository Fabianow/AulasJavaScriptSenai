
/* importando um modulo que permite  ler a entrada do usuario */

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let nota
let nota2
let nota3
let nota4
let faltas
let cargaH

rl.question("Digite a nota da primeira prova", function(nota){
    nota = Number(nota);   
    rl.question("Digite a nota da primeira prova", function(nota2){
        nota2 = Number(nota2);  
        rl.question("Digite a nota da primeira prova", function(nota3){
            nota3 = Number(nota3); 
            rl.question("Digite a nota da primeira prova", function(nota4){
                nota4 = Number(nota4);
                rl.question("Digite a carga horaria", function(cargaH){
                    
                
                let media = (nota + nota2 + nota3 + nota4)/4;
                rl.question("Digite suas faltas", function(faltas){
                    faltas = Number(faltas);
                    let resultado = (faltas/cargaH)*100 
                rl.close()
                if(faltas >= 75 ){
                    console.log("Reproado por faltas🤣🤣🤣🤣")
                }else if (media < 6){
                 console.log("reprovado, sua media foi de", media ,"e sua faltas em",faltas,"%")
                }else{
                    console.log("aprovado com sua incrivel media de", media,"e suas faltas em",faltas,"%")
                }
             
            })
        })
    })
})
})
})
