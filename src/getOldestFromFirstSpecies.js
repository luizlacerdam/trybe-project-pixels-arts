const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = data.employees.find((colaborador) => colaborador.id === id);
  const primeiroAnimal = pessoa.responsibleFor[0];
  const especieAnimal = data.species.find((animal) => animal.id === primeiroAnimal);
  const animalMaisVelho = especieAnimal.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalMaisVelho);
}
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
