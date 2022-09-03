const data = require('../data/zoo_data');
const { species } = data;

function locations() {
  const arr = [];
  species.forEach((element) => {
    if (!arr.includes(element.location)) {
      arr.push(element.location);
    }
  });
  return arr;
}
console.log(locations());
function findAnimals(location) {
  const filtroAnimais = species.filter((animal) => animal.location === location);
  const arr = [];
  filtroAnimais.forEach((item) => arr.push(item.name));
  return arr;
}
// console.log(findAnimals('NE'));
function getAnimalMap(options) {
  return species;
}
// console.log(getAnimalMap({}));
module.exports = getAnimalMap;
