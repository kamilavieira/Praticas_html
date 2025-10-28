const Produto = require("./produtos");
const Usuario = require( './usuarios');

const rotas = {
    '/produtos': {
        'GET': Produto.listar(),
        'POST': Produto.adicionar(),
        'PUT': Produto.editar(0),
        'DELETE': Produto.remover(0)
},
    '/usuarios': {
        'GET': Usuario.listar(),
        'POST': Usuario.adicionar(),
        'PUT': Usuario.editar(0),
        'DELETE': Usuario.remover(0)
}
};

module.exports = rotas;