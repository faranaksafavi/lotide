assertEqual = require('./assertEqual.js')
eqArray = require('./eqArray');
const assertArraysEqual = function(a, b){
  assertEqual(eqArray(a,b), true);
} ;
module.exports = assertArraysEqual;