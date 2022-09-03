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
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${horario.open}am until ${horario.close}pm`,
    exhibition: animalArrays(day),
  };
}
function allSchesule() {
  const days = Object.keys(data.hours);
  const obj = days.reduce((acc, curr) => {
    acc[curr] = findByDay(curr);
    return acc;
  }, {});
  return obj;
}
// console.log(allSchesule());
function whatItIs(string) {
  const days = Object.keys(data.hours);
  const species = data.species.map((specie) => specie.name);
  if (days.includes(string)) {
    return 'day';
  }
  if (species.includes(string)) {
    return 'animal';
  }
  return allSchesule();
}
function getSchedule(scheduleTarget) {
  if (whatItIs(scheduleTarget) === 'day') {
    return {
      [scheduleTarget]: findByDay(scheduleTarget),
    };
  }
  if (whatItIs(scheduleTarget) === 'animal') {
    return findByAnimal(scheduleTarget);
  }
  return allSchesule();
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
