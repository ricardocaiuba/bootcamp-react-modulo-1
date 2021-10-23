//
const carModel = ["Onix", "T-Cros", "HB20", "Palio", "Fusion"];

// FOR - Laço de Repetição
console.log("--- [for] ---");
for (let index = 0; index < carModel.length; index++) {
  console.log(carModel[index]);
}

console.log("\n--- [while] ---");
let index = 0;
while (index < carModel.length) {
  console.log(carModel[index]);
  index++;
}

console.log("\n--- [for of] ---");
for (const car of carModel) {
  console.log(car);
}

console.log("\n--- [iterator] ---");

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
};

for (const car of carModelAll) {
  console.log(car);
}
