const data = require('../data/zoo_data');

function isManager(id) {
  const colaboradores = data.employees;
  return colaboradores.some((elemento) => elemento.managers.find((ids) => ids === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees.filter((element) => element.managers.includes(managerId)).map((item) =>
      `${item.firstName} ${item.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
