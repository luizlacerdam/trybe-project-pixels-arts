const data = require('../data/zoo_data');

function countAnimals(animal) {
  const especiesAnimais = data.species;
  if (!animal) {
    const all = especiesAnimais.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return all;
  }
  const { specie, sex } = animal;
  const escontrarEspecie = especiesAnimais.find((especie) => especie.name === specie);
  if (!sex) {
    return escontrarEspecie.residents.length;
  }
  const filtroSexo = escontrarEspecie.residents.filter((resident) => resident.sex === sex);
  return filtroSexo.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));
module.exports = countAnimals;
