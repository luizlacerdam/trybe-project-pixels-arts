const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  let result = [];
  if (ids.length === 0) {
    result = [];
  } else {
    ids.forEach((id) => {
      result.push(species.find((element) => element.id === id));
    });
  }
  return result;
}
module.exports = getSpeciesByIds;
