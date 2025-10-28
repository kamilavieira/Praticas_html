class Usuario {
  static usuarios = [
    
  ];

  static listar() {
    return Usuario.usuarios;
  }

  static adicionar(id, nome, login){
    Usuario.usuarios.push({
      id: id,
      nome: nome,
      login: login
    });
  }
  static editar(index){
    
  }
  static remover(index){
    Usuario.usuarios.splice(index, 1);
  }
}

module.exports = Usuario;