const checkAllowedParams = (x, y) => {
  // check array
  if (Array.isArray(x) || Array.isArray(y))
    throw new Error('Invalid parameter(s). Paramaters cant be an array!');
  return true;
}

const checkEmptyObj = (obj) => {
  return obj === null
    ? true
    : Object.keys(obj).length === 0
      ? true
      : false;

};

const removeUndefinedField = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}
const unwantedTypeOfValue = (obj) => {
  const allowObjType = ['string', 'number', 'boolean'];
  return Object.entries(obj).some(([key, value]) => allowObjType.includes(typeof value) === false);
}
const deepEqual = (a, b) => {
  if (checkAllowedParams(a, b)) {
    if (typeof (a) === 'object' && typeof (b) === 'object') {

      //check null because type of null is also `object`
      if (a === null && b === null) return true;

      if (!checkEmptyObj(a) && !checkEmptyObj(b)) {
        // remove field that have value as undefined
        const aWithoutUndefined = removeUndefinedField(a);
        const bWithoutUndefined = removeUndefinedField(b);

        // check value of field. value should be string/number/boolean
        if(unwantedTypeOfValue(aWithoutUndefined) && unwantedTypeOfValue(bWithoutUndefined)){
          return false;
        } else {
          return Object.entries(aWithoutUndefined).sort().toString() === Object.entries(bWithoutUndefined).sort().toString() ? true : false;
        }
      }
      return false;
    } else {
      return a === b ? true : false;
    }
  }
  return false;
}

module.exports = deepEqual;