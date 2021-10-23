(function mensagem() {
  console.log("Exemplo de IIFE");
})();

(function () {
  console.log("Exemplo 2 de IIFE");
})();

const unicoId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `id_${count}`;
  };
})();

console.log(unicoId());
console.log(unicoId());
console.log(unicoId());
console.log(unicoId());
console.log(unicoId.count);
