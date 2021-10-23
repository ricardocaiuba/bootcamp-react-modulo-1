console.log("--- [Exemplo Função Geradora] ---");
function getIdNormal(range) {
  let i = 0;
  while (i < range) {
    i++;
    return i;
  }
}
console.log(getIdNormal(5));

function* getID(range) {
  let i = 0;
  while (i < range) {
    i++;
    yield i;
  }
}

let it = getID(3);
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("\n--- [for of] ---");
let it2 = getID(5);
for (const index of it2) {
  console.log(index);
}

console.log("\n--- [getUniqueID] ---");
function* getUniqueID() {
  let i = 0;
  while (true) {
    i++;
    yield `${i}-asdrf-${i - 1}-clkjh-${i + 1}`;
  }
}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {
  const id = idCarsGenerator.next().value;
  cars[id] = { id, car };
}

addCar("Palio");
addCar("Fox");
addCar("Fusion");
addCar("HB20");
addCar("Ka");
console.log(cars);

console.log("\n--- [Generator com iterator] ---");
const carModelAll = {
  allModel: {
    Fiat: ["Palio", "Cronos", "Toro"],
    Ford: ["Ka", "Fusion", "Ranger"],
    Volkswagen: ["Gol", "Up", "Nivus"],
    Chevrolet: ["Onix", "Selta", "Corsa"],
  },
  [Symbol.iterator]() {
    const brands = Object.values(this.allModel);

    let currentModelIndex = 0;
    let currentBrandIndex = 0;

    return {
      next() {
        // Listar todos os modelos da marca
        const models = brands[currentModelIndex];
        // Verifica se já navegou em todos os modelos e passapara a marca
        if (!(currentModelIndex < models.length)) {
          currentBrandIndex++;
          currentModelIndex = 0;
        }
        // Verifica se já navegou em todas as marcas
        if (!(currentBrandIndex < brands.length)) {
          return {
            value: undefined,
            done: true,
          };
        }

        return {
          value: brands[currentBrandIndex][currentModelIndex++],
          done: false,
        };
      },
    };
  },
  *carGenerator() {
    const brands = Object.values(this.allModel);
    let currentBrandIndex = 0;
    while (currentBrandIndex < brands.length) {
      yield* brands[currentBrandIndex];
      currentBrandIndex++;
    }
  },
};

let itA = carModelAll.carGenerator();

console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());

for (const car of carModelAll.carGenerator()) {
  console.log(car);
}

console.log("\n--- [Destructing] ---");
let itB = carModelAll.carGenerator();

console.log(...itB);
