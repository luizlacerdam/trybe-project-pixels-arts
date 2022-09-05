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
// array de locations para loop
// [ 'NE', 'NW', 'SE', 'SW' ]

function findAnimals(location) {
  const filtroAnimais = species.filter((animal) => animal.location === location);
  const arr = [];
  filtroAnimais.forEach((item) => arr.push(item.name));
  return arr;
}
// recebe uma string e retorna animais que estao naquela loc
// [ 'lions', 'giraffes' ]

function defaultObject() {
  const reduceObj = locations().reduce((acc, curr) => {
    acc[curr] = findAnimals(curr);
    return acc;
  }, {});
  return reduceObj;
}
// retorna objeto padrao
// {
//   NE: [ 'lions', 'giraffes' ],
//   NW: [ 'tigers', 'bears', 'elephants' ],
//   SE: [ 'penguins', 'otters' ],
//   SW: [ 'frogs', 'snakes' ]
// }

function animalNames(especie) {
  const filtroAnimais = species.filter((animal) => animal.name === especie);
  const arr = [];
  filtroAnimais[0].residents.forEach((element) => arr.push(element.name));
  return { [especie]: arr };
}
// recebe uma especie e  retorna { lions: [ 'Zena', 'Maxwell', 'Faustino', 'Dee' ] }
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
  return demaisObj();
}
console.log(objDestruc({ includeNames: true }));
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return defaultObject();
  }
  return objDestruc(options);
}
// console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
