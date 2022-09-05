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
function animalNames(especie) {
  const filtroAnimais = species.filter((animal) => animal.name === especie);
  const arr = [];
  filtroAnimais[0].residents.forEach((element) => arr.push(element.name));
  return { [especie]: arr };
}
function animalNamesSex(especie, sex) {
  const filtroAnimais = species.filter((animal) => animal.name === especie);
  const arr = [];
  const filtroSex = filtroAnimais[0].residents.filter((animal) => animal.sex === sex);
  filtroSex.forEach((element) => arr.push(element.name));
  return { [especie]: arr };
}
function animalNamesSorted(especie) {
  const filtroAnimais = species.filter((animal) => animal.name === especie);
  const arr = [];
  filtroAnimais[0].residents.forEach((element) => arr.push(element.name));
  return { [especie]: arr.sort() };
}
function animalNamesSexSorted(especie, sex) {
  const filtroAnimais = species.filter((animal) => animal.name === especie);
  const arr = [];
  const filtroSex = filtroAnimais[0].residents.filter((animal) => animal.sex === sex);
  filtroSex.forEach((element) => arr.push(element.name));
  return { [especie]: arr.sort() };
}
function demaisObjSorted() {
  const localizacoes = locations();
  const objPadrao = defaultObject();
  localizacoes.forEach((localizacao) => {
    const arr = [];
    findAnimals(localizacao).forEach((item) => {
      arr.push(animalNamesSorted(item));
      objPadrao[localizacao] = arr;
    });
  });
  return objPadrao;
}
function demaisObj() {
  const localizacoes = locations();
  const objPadrao = defaultObject();
  localizacoes.forEach((localizacao) => {
    const arr = [];
    findAnimals(localizacao).forEach((item) => {
      arr.push(animalNames(item));
      objPadrao[localizacao] = arr;
    });
  });
  return objPadrao;
}
function demaisObjSex(sex) {
  const localizacoes = locations();
  const objPadrao = defaultObject();
  localizacoes.forEach((localizacao) => {
    const arr = [];
    findAnimals(localizacao).forEach((item) => {
      arr.push(animalNamesSex(item, sex));
      objPadrao[localizacao] = arr;
    });
  });
  return objPadrao;
}
function demaisObjSexSorted(sex) {
  const localizacoes = locations();
  const objPadrao = defaultObject();
  localizacoes.forEach((localizacao) => {
    const arr = [];
    findAnimals(localizacao).forEach((item) => {
      arr.push(animalNamesSexSorted(item, sex));
      objPadrao[localizacao] = arr;
    });
  });
  return objPadrao;
}
function objDestruc(options) {
  const { sex, sorted } = options;
  if (sex && sorted) {
    return demaisObjSexSorted(sex);
  }
  if (sex) {
    return demaisObjSex(sex);
  }
  if (sorted) {
    return demaisObjSorted();
  }
  return demaisObj();
}
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return defaultObject();
  }
  return objDestruc(options);
}
module.exports = getAnimalMap;
