console.log("--- [EXEMPLO 1 - PARA CRIAÇÃO DE PROMISSE E EXECUCAO] ---");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p1"), 2000);
});

p1.then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p1"), 2000);
}).then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

console.log("---------------------------------------------------------");
console.log("--- [EXEMPLO 2 - CRIAÇÃO DE PROMISSE E USO DO CATCH] ---");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p2"), 2000);
});
p2.then((res) => {
  console.log(res);
});
p2.catch((rej) => {});

p2.then((res) => {
  console.log(res);
}).catch((rej) => {});
console.log("--------------------------------------------------------");
console.log(
  "--- [EXEMPLO 3] PROMISSES COM O CATCHE O UNICO CATH PARA TODAS AS REJEICOES---"
);
const p3 = new Promise((resolve, reject) => {
  let random = Math.random().toFixed(2);
  if (random > 0.5) {
    resolve(`Sucesso p3 -> ${random}`);
  } else {
    reject(`Falha p3 -> ${random}`);
  }
});
p3.then(console.log).catch(console.error);
console.log(
  "------------------------------------------------------------------------------"
);
console.log("--- [EXEMPLO 4 - ENCADEAMENTO DE THEN E O CATCH] ---");
const p4 = new Promise((resolve, reject) => {
  let random = Math.random().toFixed(2);
  if (random > 0.5) resolve(`Sucesso p4 -> ${random}`);
  else reject(`Falha p4 -> ${random}`);
});

p4.then(function acao1(res) {
  console.log(`${res} da acao 1`);
  return res;
})
  .then(function acao1(res) {
    console.log(`${res} da acao 2`);
    return res;
  })
  .then(function acao1(res) {
    console.log(`${res} da acao 3`);
    return res;
  })
  .catch(function erro(rej) {
    console.error(rej);
  });
console.log("----------------------------------------------------");
console.log("--- [EXEMPLO 5] ---");
const p5 = new Promise((resolve, reject) => {
  let random = Math.random().toFixed(2);
  if (random > 0.5) resolve(`Sucesso p5 -> ${random}`);
  else reject(`Falha p5 -> ${random}`);
});

p5.then(function acao1(res) {
  console.log(`${res} da acao 1`);
  return res;
})
  .catch(function erro1(rej) {
    console.error("Erro no primeiro Catch");
    return rej;
  })
  .then(function acao1(res) {
    console.log(`${res} da acao 2`);
    return res;
  })
  .then(function acao1(res) {
    console.log(`${res} da acao 3`);
    return res;
  })
  .catch(function erro2(rej) {
    console.error(rej);
    return rej;
  });
console.log("-------------------");
console.log("--- [EXEMPLO 6] ---");
const p6 = new Promise((resolve, reject) => {
  let random = Math.random().toFixed(2);
  if (random > 0.5) resolve(`Sucesso p6 -> ${random}`);
  else reject(`Falha p6 -> ${random}`);
});

p6.catch(function erro1(rej) {
  console.error("p6 -> Erro no primeiro catch");
  return rej;
});
p6.catch(function erro2(rej) {
  console.error(rej);
});

p6.then(function acao1(res) {
  console.log(`${res} da acao 1`);
  return res;
})
  .then(function acao1(res) {
    console.log(`${res} da acao 2`);
    return res;
  })
  .then(function acao1(res) {
    console.log(`${res} da acao 3`);
    return res;
  });
console.log("-------------------");
console.log("--- [EXEMPLO 7] ---");
const p7 = new Promise((resolve, reject) => {
  let random = Math.random().toFixed(2);
  if (random > 0.5) resolve(`Sucesso p7 -> ${random}`);
  reject(`Falha p7 -> ${random}`);
});

p7.catch(function erro1(rej) {
  console.error("p7 -> Erro no primeiro catch");
  return rej;
});

p7.then(function acao1(res) {
  console.log(`${res} Promessa rejeitada na acao1`);
  throw new Error("Error");
})
  .catch(function erro2(rej) {
    console.error("Tratamento das rejeições p7 ou acao 1");
    return rej;
  })
  .then(function acao2(res) {
    console.log(`${res} da acao 2 - P7`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da acao 3 - p7`);
    return res;
  })
  .catch(function erro3(rej) {
    console.erro("p7 -> Tratamento das rejeições em acao2 e acao3");
    return rej;
  });

console.log("-------------------");
