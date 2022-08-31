const data = require('../data/zoo_data');

function findByName(name) {
  const colaboradores = data.employees;
  const findFirstName = colaboradores.find((colaborador) => colaborador.firstName === name);
  const findLastName = colaboradores.find((colaborador) => colaborador.lastName === name);
  if (findFirstName !== undefined) {
    return findFirstName;
  }
  if (findLastName !== undefined) {
    return findLastName;
  }
  return new Error('Informações inválidas');
}

function findById(id) {
  const colaboradores = data.employees;
  const colaborador = colaboradores.find((pessoa) => pessoa.id === id);
  if (colaborador !== undefined) {
    return colaborador;
  }
  return new Error('Informações inválidas');
}
function locationSpecie(specieId) {
  const especies = data.species;
  const specieFind = especies.find((especie) => especie.id === specieId);
  return specieFind.location;
}
function locationPush(arr) {
  const locations = [];
  arr.forEach((element) => {
    locations.push(locationSpecie(element));
  });
  return locations;
}
function getEmployeesCoverage(obj) {
  const { name, id } = obj;
  if (name) {
    const { id, firstName, lastName, responsibleFor } = findByName(name);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleFor,
      locations: locationPush(responsibleFor),
    };
  }
  return findById(id);
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
