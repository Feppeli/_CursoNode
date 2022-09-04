const http = require('http') // Padrão commom js, traz modulos nativos do node através do require
const host = '127.0.0.1'
const port = 3000


const server = http.createServer((req, res) => { // criando o servidor e coletando a resposta
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola mundo \n meu primeiro Script')
});

server.listen(port, host, () => { // configurando a porta em que o servidor estará ligado
    console.log(`Server Rodando com sucesso em: http://${host}:${port}`)
});

// Para iniciar o servidor digitar: node Server.js