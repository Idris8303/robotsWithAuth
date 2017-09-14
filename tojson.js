
const people = require('./data.js');

people.users.forEach(function (person) {
  console.log(JSON.stringify(person));

});
module.exports{
  people: people

};







// http://localhost:2315/details/1/
