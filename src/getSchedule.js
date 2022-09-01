const data = require('../data/zoo_data');

function findByAnimal(nome) {
  const animals = data.species;
  const animal = animals.find((item) => item.name === nome);
  return animal.availability;
}
function findByDay(params) {
  const 
  return 0;
}
function whatItIs(string) {
  const days = Object.keys(data.hours);
  const species = data.species.map((specie) => specie.name);
  if (days.includes(string)) {
    return 'day';
  }
  if (species.includes(string)) {
    return 'animal';
  }
  return 'error?';
}
function getSchedule(scheduleTarget) {
  if (whatItIs(scheduleTarget) === 'day') {
    return findByDay(scheduleTarget);
  }
  if (whatItIs(scheduleTarget) === 'animal') {
    return findByAnimal(scheduleTarget);
  }
  return 0;
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
