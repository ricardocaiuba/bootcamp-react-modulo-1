console.log("--- [EXEMPLO CLOSURE] ---");
function IMC() {
  let altura = 1.8;

  function calcula() {
    let peso = 200;
    console.log("IMC: " + peso / (altura * altura));
    console.log("IMC: " + Math.round(peso / (altura * altura)));
    console.log("IMC: " + (peso / (altura * altura)).toFixed(2));
  }
  return calcula;
}
let imc = IMC();
imc();
console.log("-------------------------");

console.log("--- [EXEMPLO CLOSURE ENCAPSULADO] ---");
function Carro() {
  this.proprietario = "Ricardo";
  let ano = 2020;

  this.getAno = function () {
    return ano;
  };

  this.setAno = function (a) {
    ano = a;
  };
}

let carro = new Carro();
console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());
console.log("-------------------------------------");
