const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const encontrarEspecie = species.find((item) => item.name === animal);
  return encontrarEspecie.residents.every((element) => element.age > age);
}
console.log(getAnimalsOlderThan('bears', 5));
module.exports = getAnimalsOlderThan;
