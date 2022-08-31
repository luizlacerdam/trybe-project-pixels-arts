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

function getEmployeesCoverage(obj) {
  const { name, id } = obj;
  if (name) {
    return findByName(name);
  }
  return findById(id);
}
console.log(getEmployeesCoverage({ id: '56d43ba3-a5a7-40f6-8dsd7-cbb05082383f' }));
module.exports = getEmployeesCoverage;
