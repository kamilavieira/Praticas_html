// const produtos = [
//   { id: 1, nome: "Teclado", valor: 50 },
//   { id: 2, nome: "Mouse", valor: 30 },
// ];

// function listarProdutos(){
//    return JSON.stringify(produtos);
// }

// function adicionarProduto(produto){
//     produtos.push(produto);
//     return JSON.stringify({mensagem: "Produto adicionando com sucesso"});
// }

// function removerProduto(produto){
//     produtos.pop();
//     return JSON.stringify({mensagem: "Produto removido"});
// }

// module.exports = { listarProdutos, adicionarProduto, removerProduto };

class Produto {
  static produtos = [
    { id: 1, nome: "Teclado", valor: 50 },
    { id: 2, nome: "Mouse", valor: 30 },
    { id: 3, nome: "Monitor", valor: 800 },
  ];

  static listar() {
    return Produto.produtos;
  }

  static adicionar(id, nome, valor){
    Produto.produtos.push({
      id: id,
      nome: nome,
      valor: valor
    });
  }
  static editar(id, novosDados){
    const product = Produto.produtos.find(produto => produto.id === id);
    if (product) {
      Object.assign(product, novosDados);
      return true;
    }
    return false;
  }
  static remover(index){
    Produto.produtos.splice(index, 1);
  }
}

module.exports = Produto;