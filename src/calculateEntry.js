const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((item) => item.age < 18);
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50);
  const senior = entrants.filter((item) => item.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, senior, child } = data.prices;
  const quantChild = countEntrants(entrants).child;
  const quantAdult = countEntrants(entrants).adult;
  const quantSenior = countEntrants(entrants).senior;
  const total = (adult * quantAdult) + (senior * quantSenior) + (child * quantChild);
  return total;
}
console.log(countEntrants({}));
module.exports = { calculateEntry, countEntrants };
