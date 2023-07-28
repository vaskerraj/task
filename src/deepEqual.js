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
      
      //check null because type of null is also object
      if(a === null && b === null) return true;

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