const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((item) => item.age < 18);
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50);
  const senior = entrants.filter((item) => item.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}
console.log(countEntrants([
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
]));
function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
