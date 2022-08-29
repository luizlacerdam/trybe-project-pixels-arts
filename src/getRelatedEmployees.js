const data = require('../data/zoo_data');

function isManager(id) {
  const colaboradores = data.employees;
  return colaboradores.some((elemento) => elemento.managers.find((ids) => ids === id));
}
// burlId pessoa gerente
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c09921'));
function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
