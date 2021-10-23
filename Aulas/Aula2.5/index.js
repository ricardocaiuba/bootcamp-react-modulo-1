let Carro = {
  proprietario: "Ricardo",
  ano: 2016,
};

const handler = {
  get(target, property, receiver) {
    console.log(`GET ${property}`);
    if (property in target) {
      return target[property];
    }
    return `Propriedade inexistente -> [${property}]`;
  },
};

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.ano);
console.log(carroProxy.ano);
console.log("- - - - - - - - - - - - - - - - - - -");
console.log(Carro.modelo);
console.log(carroProxy.modelo);
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("Exemplo proxy para tradutor");
let tradutor = {
  Carro: "Car",
  Ano: "Year",
};

let handlerTradutor = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return property;
    }
  },
  set(target, property, value) {
    if (typeof value == "string") {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  },
};

let tradutorProxy = new Proxy(tradutor, handlerTradutor);

console.log(tradutorProxy.Carro);
console.log(tradutorProxy.Modelo);
console.log(tradutorProxy.Ano);
console.log("- - - - - - - - - - - - - - - - - - -");

tradutorProxy.Modelo = "Model";
tradutorProxy.Marca = 123456;

console.log(tradutorProxy.Modelo);
console.log(tradutorProxy.Marca);
