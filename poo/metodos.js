class Carro {
  static acelerar() {
    console.log('O carro está acelerando.');
  }

  static frear() {
    console.log('O carro está freando.');
  }

  static ligarSeta(direcao) {
    console.log(`Ligando seta para ${direcao}.`);
  }
}

Carro.acelerar(); // O carro está acelerando.
Carro.frear(); // O carro está freando.
Carro.ligarSeta('direita'); // Ligando seta para direita.

class BancoDeDados {
  static criar(dado) {
    console.log(`Criando o dado: ${dado}`);
  }

  static atualizar(dado) {
    console.log(`Atualizando o dado: ${dado}`);
  }

  static deletar(dado) {
    console.log(`Deletando o dado: ${dado}`);
  }

  static consultar(dado) {
    console.log(`Consultando o dado: ${dado}`);
  }
}

BancoDeDados.criar('Registro 1'); // Criando o dado: Registro 1
BancoDeDados.atualizar('Registro 1'); // Atualizando o dado: Registro 1
BancoDeDados.deletar('Registro 1'); // Deletando o dado: Registro 1
BancoDeDados.consultar('Registro 1'); // Consultando o dado: Registro 1