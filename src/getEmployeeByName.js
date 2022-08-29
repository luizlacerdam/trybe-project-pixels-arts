const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result;
  if (!employeeName) {
    result = {};
  } else {
    result = data.employees.find((element) => element.firstName === employeeName
    || element.lastName === employeeName);
  }
  return result;
}
module.exports = getEmployeeByName;
