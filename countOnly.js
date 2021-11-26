assertEqual = require("./assertEqual.js");
isEqlArray = require("./eqArray.js");

const countOnly = function (data, obj) {
  let result = {};
  let keysValueS = Object.entries(obj);
  for (const it of keysValueS) {
    if (it[1]) {
      if (data.includes(it[0])) {
        result[it[0]] = data.filter((x) => x == it[0]).length;
      }
    }
  }
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
assertEqual(
  countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  }),
  { Jason: 1, Fang: 2 },
  (a, b) => {
    let res = true;
    for (const key in a) {
      if (!(a[key] == b[key])) {
        res = false;
        break;
      }
    }
    return res;
  }
);
