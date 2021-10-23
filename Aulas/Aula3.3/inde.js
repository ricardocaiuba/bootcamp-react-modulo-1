console.log("Inicio");
setTimeout(function getlog() {
  console.log("Aguarde...");
}, 5000);
console.log("Fim");

Promise.resolve("success").then(
  (value) => {
    console.log(value);
  },
  (value) => {}
);
