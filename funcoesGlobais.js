function saudacao() {
    console.log('E aí, beleza?');
    
}

setTimeout(saudacao, 2000) // milissegundos

let contador = 0;

const id = setInterval(() => { // o setInterval sempre gera um id
    contador++;
    console.log('Tempo decorrido em segundos: ', contador);
    if (contador == 10) clearInterval(id); //faz a parada do intervalo
}, 1000)