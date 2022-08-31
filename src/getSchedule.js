const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const { hours } = data;
    const hoursArray = Object.entries(hours);
    let obj = {};
    
    return hoursArray;
  }
  const animalProcurado = data.species.find((animal) => animal.name === scheduleTarget);
  return animalProcurado.availability;
}
console.log(getSchedule());
module.exports = getSchedule;
