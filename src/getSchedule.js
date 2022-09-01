const data = require('../data/zoo_data');

function findByAnimal(nome) {
  const animals = data.species;
  const animal = animals.find((item) => item.name === nome);
  return animal.availability;
}
function animalArrays(day) {
  const animals = data.species;
  const arr = [];
  const filtroAnimais = animals.filter((element) => element.availability.includes(day));
  filtroAnimais.forEach((item) => arr.push(item.name));
  return arr;
}
function findByDay(day) {
  const horarios = data.hours;
  const horario = horarios[day];
  return {
    [day]: {
      officeHour: `Open from ${horario.open}am until ${horario.close}pm`,
      exhibition: animalArrays(day),
    },
  };
}
// console.log(findByDay('Thursday'));
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
// console.log(getSchedule('lions'));
module.exports = getSchedule;
