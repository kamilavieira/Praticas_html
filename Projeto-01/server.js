import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const server = express();
const Port = 3000;
const host = 'localhost';

const __filename = fileURLToPath(import.meta.url); //vai traduzir o nome do caminho em que estamos
const __dirname = dirname(__filename); //sai da pasta onde o server.js está pra ir buscar os outros arquivos que interessa

//__filename = path(__dirname,'views','index.html')
//const __dirname = path.dirname(__filename)
//app.use(express.static('public')); //para react deixa sem essa linha
//res.sendFile(path.join(__dirname, 'views', 'index.html'))

// Rota principal
server.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'views', 'index.html'));
});

// Rota sobre
server.get('/sobre', (req, res) => {
  res.sendFile(join(__dirname, 'views', 'sobre.html'));
});

// Rota 404 (tudo que não for acima)
server.use((req, res) => {
  res.status(404).sendFile(join(__dirname, 'views', '404.html'));
});

// server.get('/', (req,res) => {
//     res.send('Servidor funcionando');
// });

server.listen(Port, host, () => {
    console.log(`Servidor funcionando em http://${host}:${Port}`);   
})
