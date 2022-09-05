const data = require('../data/zoo_data');

const { species } = data;
// array de localizações para rodar
function locations() {
  const arr = [];
  species.forEach((element) => {
    if (!arr.includes(element.location)) {
      arr.push(element.location);
    }
  });
  return arr;
}

function findAnimals(location) {
  const filtroAnimais = species.filter((animal) => animal.location === location);
  const arr = [];
  filtroAnimais.forEach((item) => arr.push(item.name));
  return arr;
}

function defaultObject() {
  const reduceObj = locations().reduce((acc, curr) => {
    acc[curr] = findAnimals(curr);
    return acc;
  }, {});
  return reduceObj;
}
function namedAnimals(location) {
  const filtroAnimais = species.filter((animal) => animal.location === location);
  const arr = [];
  filtroAnimais.forEach((element) => arr.push(element.residents));
  // filtroAnimais.residents.forEach((item) => arr.push(item.name));
  return arr;
}
console.log(namedAnimals('NE'));
function objDestruc(options) {
  const { includeNames, sex, sorted } = options;
  if (sex && sorted) {
    return 'sex and sorted';
  }
  if (sex) {
    return 'sexx';
  }
  if (sorted) {
    return 'sorted';
  }
  return includeNames;
}
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return defaultObject();
  }
  return objDestruc(options);
}
// console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
