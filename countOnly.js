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
