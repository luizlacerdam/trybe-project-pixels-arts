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
console.log(findByName('sasa'));
// function findById(id) {
  
// }
function getEmployeesCoverage(obj) {
  const { name, id } = obj;
  return 0;
}
// console.log(getEmployeesCoverage({ name: 'luiz' }));
module.exports = getEmployeesCoverage;
