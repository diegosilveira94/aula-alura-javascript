// carrega a biblioteca readLine
const readline = require('readline');

// cria uma interface
const leitor = readline.createInterface({ 
    input: process.stdin, // vincula ao processo do S.O
    output: process.stdout
})

function msgBoasVindas() {
    leitor.question('Qual é o seu nome? ', (nome) => {
        console.log('Olá', nome);
        console.log('Boas vindas ao nosso sistema!');
        
        // Agora perguntamos a idade depois de receber o nome
        leitor.question('Qual a sua idade? ', (idade) => {
            if(idade >= 18) {
                console.log('Você já pode tirar sua CNH');
            } else {
                console.log('Você ainda não pode tirar a sua CNH');   
            }
            leitor.close();
        });
    });
}

module.exports = msgBoasVindas;