// Escopo de Bloco
if (true) {
  const message = "Olá";
  console.log(message);
}
// console.log(message); // ReferenceError: message is not defined

for (const color of ["verde", "vermelho", "amarelo"]) {
  const message = "olá";
  console.log(color);
  console.log(message);
}
//console.log(color); // ReferenceError: color is not defined
//console.log(message); // ReferenceError: message is not defined

// Exemplo de escopo de bloco com var porem será escopo global
if (true) {
  var count = 0;
  console.log(count);
}
console.log(count);

// Exemplo de escopo local com var
function executar() {
  var text = "Escopo local com VAR";
  console.log(text);
}
executar();
// console.log(text); // ReferenceError: text is not defined

// Exemplo de escopo local com LET CONST
function executar2() {
  let txt = 0;
  const test = 2;

  function executar3() {}

  console.log(txt);
  console.log(test);
  console.log(executar3);
}
executar2();
// console.log(txt); // ReferenceError: txt is not defined
// console.log(test); // ReferenceError: test is not defined
// console.log(executar3); // ReferenceError: executar3 is not defined

// Escopo aninhado
function executar3() {
  const txt = "Escopo aninhado";
  if (true) {
    const name = "Carro";
    console.log(txt);
  }
  //console.log(name); // ReferenceError: name is not defined
}
executar3();

// Exemplo escopo global
let gName = "Ricardo";
console.log(gName);

// Exemplo Hoisting
printName();

function printName() {
  console.log("Nome: " + gName);
}

printName();
