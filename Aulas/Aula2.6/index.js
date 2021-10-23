console.log("--- [EXEMPLO DE CURRYING] ---");
function log(date, type, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${type}] ${message}`
  );
}

log(new Date(), "DEBUG", "Exemplo de Currying");

const logCurrying = (date) => (type) => (message) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] [${type}] ${message}`
  );
};

logCurrying(new Date())("DEBUG")("Exemplo de Currying");

let logNow = logCurrying(new Date());
logNow("DEBUG")("Exemplo de Currying com parametro fixo");

let logdebugNow = logNow("DEBUG");
logdebugNow("Exemplo de nova função de Currying com parametro fixo");

console.log("-----------------------------");
