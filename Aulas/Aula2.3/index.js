console.log("--- [] ---");
function Pessoa(nome) {
  if (!nome) this.nome = "Fulano";
  else this.nome = nome;

  this.dizerOla = () => console.log(this.nome + " diz: Olá!");
}

let pessoaA = new Pessoa("Ricardo");

Pessoa.digaOla = function () {
  console.log("Olá, meu nome é: " + this.nome);
};

let pessoaB = new Pessoa("Carolline");

console.log("- - - - - - - - - - - - - - - - - - - - - - - ");
try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha em pessoaA.digaOla!");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log("Falha em pessoaB.digaOla!");
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - ");
pessoaB.digaOla = function () {
  console.log("Oi, meu nome é: " + pessoaB.nome);
};

try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha em pessoaA.digaOla!");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log("Falha em pessoaB.digaOla!");
}
Pessoa.prototype.digaOla = function () {
  console.log("Olá, sou o(a): " + this.nome);
};

let pessoaC = new Pessoa("Vilma");
console.log("- - - - - - - - - - - - - - - - - - - - - - - ");
try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha em pessoaA.digaOla!");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log("Falha em pessoaB.digaOla!");
}

try {
  pessoaC.digaOla();
} catch (error) {
  console.log("Falha em pessoaC.digaOla!");
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - ");
Pessoa.prototype.dizerOla = function () {
  console.log(this.nome + "vou dizer outro olá");
};

pessoaB.dizerOla = function () {
  console.log(this.nome + " consigo dizer outro olá");
};

try {
  pessoaA.dizerOla();
} catch (e) {
  console.log("Falha em pessoaA.dizerOla!");
}

try {
  pessoaB.dizerOla();
} catch (error) {
  console.log("Falha em pessoaB.dizerOla!");
}

try {
  pessoaC.dizerOla();
} catch (error) {
  console.log("Falha em pessoaC.dizerOla!");
}
