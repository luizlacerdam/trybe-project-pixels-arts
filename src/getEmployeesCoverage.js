const data = require('../data/zoo_data');

function findByName(name) {
  const colaboradores = data.employees;
  const findFirstName = colaboradores.find((colaborador) => colaborador.firstName === name);
  const findLastName = colaboradores.find((colaborador) => colaborador.lastName === name);
  if (findFirstName === undefined && findLastName === undefined) {
    throw new Error('Informações inválidas');
  }
  if (findFirstName !== undefined) {
    return findFirstName;
  }
  if (findLastName !== undefined) {
    return findLastName;
  }
}
function findById(id) {
  const colaboradores = data.employees;
  const colaborador = colaboradores.find((pessoa) => pessoa.id === id);
  if (colaborador === undefined) {
    throw new Error('Informações inválidas');
  }
  if (colaborador !== undefined) {
    return colaborador;
  }
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
function nameSpecie(specieId) {
  const especies = data.species;
  const specieFind = especies.find((especie) => especie.id === specieId);
  return specieFind.name;
}
function nameSpeciePush(arr) {
  const specieNames = [];
  arr.forEach((element) => {
    specieNames.push(nameSpecie(element));
  });
  return specieNames;
}
function padraoRetorno(id, firstName, lastName, responsibleFor) {
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: nameSpeciePush(responsibleFor),
    locations: locationPush(responsibleFor),
  };
}

function getEmployeesCoverage(obj) {
  const { name, id: ObjId } = obj;
  if (name) {
    const { id, firstName, lastName, responsibleFor } = findByName(name);
    return padraoRetorno(id, firstName, lastName, responsibleFor);
  }
  const { id, firstName, lastName, responsibleFor } = findById(ObjId);
  return padraoRetorno(id, firstName, lastName, responsibleFor);
}
console.log(getEmployeesCoverage({ name: 'Nelson' }));
module.exports = getEmployeesCoverage;
