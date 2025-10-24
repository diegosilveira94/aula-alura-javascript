// carregar a lib fs
const fs = require('fs');

// função de ler arquivo
fs.readFile('texto.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})