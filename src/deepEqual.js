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

const deepEqual = (a, b) => {
  if (checkAllowedParams(a, b)) {
    if (typeof (a) === 'object' || typeof (b) === 'object') {
      if (!checkEmptyObj(a) && !checkEmptyObj(b)) {

      }
      return false;
    } else {
      return a === b ? true : false;
    }
  }
  return false;
}

module.exports = deepEqual;