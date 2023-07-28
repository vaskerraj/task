const checkAllowedParams = (x, y) => {
  const allowedParams = ['string', 'number', 'boolen', 'object', 'undefined'];

  if (!allowedParams.includes(typeof (x)) && !allowedParams.includes(typeof (y)))
    throw new Error("Invalide parameter(s). Please provide string, number, boolen, object, undefined and null as argument.");

  // check array
  if (Array.isArray(x) || Array.isArray(y))
    throw new Error('Invalide parameter(s). Please provide string, number, boolen, object, undefined and null as argument.');

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
        
      }else{
        return false;
      }
    } else {
      return a === b ? true : false;
    }
  }
  return false;
}

module.exports = deepEqual;