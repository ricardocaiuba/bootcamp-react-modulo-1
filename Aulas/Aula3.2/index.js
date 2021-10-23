// Exemplo de Promise.resolve
const p1 = new Promise((resolve) => {
  resolve(console.log("p1 -> Sempre será resolvida"));
});
Promise.resolve(console.log("Sempre será resolvida"));

// Exemplo de Promise.reject
//Promise.reject(console.log("Sempre será rejeitada"));

// Exemplo de Promise.all
Promise.all([
  new Promise((resolve) => setTimeout(resolve, 1200, "p1.1")),
  new Promise((resolve) => setTimeout(resolve, 700, "p1.2")),
  new Promise((resolve) => setTimeout(resolve, 2900, "p1.3")),
])
  .then((results) => results.data[0].name)
  .then((name) => console.info(name))
  .catch((erro) => console.error(`Exceção lançada em ${erro}`));

// Exemplo de Promise.all Sucesso na ececução
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve([]), 1200)),
  new Promise((resolve) => setTimeout(() => resolve([10]), 700)),
  new Promise((resolve) => setTimeout(() => resolve([3, 4]), 2900)),
])
  .then((results) => results.length)
  .then((size) => console.info(size))
  .catch((erro) => console.error(erro));

// Exemplo de Promise.all - Uma das promisses será rejeitada
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve([]), 2800)),
  new Promise((resolve, reject) => setTimeout(() => reject([10]), 1200)),
  new Promise((resolve) => setTimeout(() => resolve([3, 4]), 800)),
])
  .then((results) => results.length)
  .then((size) => console.info(size))
  .catch((erro) => console.error(erro));

// Exemplo de Promise.race - Corrida de Promisses, qual retorna primeiro
const p5 = Promise.race([
  new Promise((resolve) => setTimeout(resolve, 2000, "p5.1")),
  new Promise((resolve, reject) => setTimeout(reject, 3000, "p5.2")),
]);
p5.then((result) => console.log(result));
p5.catch((error) => console.error(error));

// Exemplo de Promise.race - Varias Promisses, com rejeição
const p6 = Promise.race([
  new Promise((resolve) => setTimeout(resolve, 3000, "p6.1")),
  new Promise((resolve, reject) => setTimeout(reject, 2000, "p6.2")),
  new Promise((resolve) => setTimeout(resolve, 4000, "p6.3")),
]);
p6.then((result) => console.log(result));
p6.catch((error) => console.error(error));

// Exemplo de Promise.race
function showStatus() {
  console.log("Aguarde os dados sendo carregados...");
}

function timeout(delay, result) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), delay);
  });
}

function getCarInfo(car) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(`Car details: ${car}`),
      Math.floor(900 * Math.random())
    );
  });
}

function showCarInfo(car) {
  return getCarInfo(car).then((info) => {
    console.log(`Car info: ${car}`);
    return true;
  });
}

Promise.race([showCarInfo("Fusion"), timeout(300)]).then((displayed) => {
  if (!displayed) showStatus();
});

// Exemplo de Promise.allSetled
const p8 = Promise.allSettled([
  new Promise((resolve) => setTimeout(resolve, 3000, "p6.1")),
  new Promise((resolve, reject) => setTimeout(reject, 2000, "p6.2")),
  new Promise((resolve) => setTimeout(resolve, 4000, "p6.3")),
]);

p8.then((result) => console.log(result));
p8.catch((er) => console.error(er));

// Exemplo de Promise.any - Retorna a primeira promise fulfilled/realizada/resolvida
const p9 = Promise.any([
  new Promise((resolve) => setTimeout(resolve, 3000, "p6.1")),
  new Promise((resolve, reject) => setTimeout(reject, 2000, "p6.2")),
  new Promise((resolve) => setTimeout(resolve, 4000, "p6.3")),
]);

p9.then((result) => console.log(result));
p9.catch((er) => console.error(er));
