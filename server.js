// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Olá, mundo!');
// });

// const hostname = '127.0.0.1';
// const port = 3000;

// server.listen(port, hostname, () => {
//   console.log(`Servidor rodando em http://${hostname}:${port}/`);
// });

const { createServer } = require("node:http");
const Produto = require("./Routes/produtos");
const rotas = require("./Routes/Router");

const hostname = "localhost";
const port = 3000;

const server = createServer((req, res) => {
  const { url, method } = req;
  console.log("Requisição recebida:", method, url);

  if(!rotas[url] || !rotas[url][method]){
    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end("Página não encontrada - Not Found");
  }
  
  const dados = rotas[url][method];
  res.writeHead(200, { "Content-Type": "text/plain" });
  return res.end(JSON.stringify(dados));
  //     else if (url === "/produtos/remover" && method === "DELETE") {
  //     if(produtos.length===0){
  //         res.writeHead(400, {'Caontent-type': 'application/json'});
  //         return res.end(JSON.stringify({mensagem: "error: nenhum produto a ser removido"}));
  //     }
  //     produtos.pop();
  //     res.writeHead(200, {'Content-type':'application/json'});
  //     return res.end(JSON.stringify({mensagem: "Produto removido com sucesso."}));
  //   }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});
