class Pessoa {
  constructor(nome, cpf, dataDeNascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataDeNascimento = dataDeNascimento;
  }

  autenticar() {
    console.log(`${this.nome} está autenticado.`);
  }
}

class Gerente extends Pessoa {
    constructor(nome, cpf, dataDeNascimento){
        super(nome, cpf, dataDeNascimento);
        // this.login = login;
        // this.senha = senha;
    }
}

const pessoa1 = new Pessoa('João', '123.456.789-00', '01/01/1990');
const  gerente = new Gerente('Max', '125.479.635-87', '11/09/1989');
// console.log(pessoa1);
// pessoa1.autenticar();

console.log(pessoa1);
console.log(gerente);
pessoa1.autenticar();
gerente.autenticar();

