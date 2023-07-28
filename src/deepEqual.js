const checkAllowedParams = (x, y) => {
  const allowedParams = ['string', 'number', 'boolen', 'object', 'undefined'];

  if (!allowedParams.includes(typeof (x)) && !allowedParams.includes(typeof (y)))
    throw new Error("Invalide parameter(s). Please provide string, number, boolen, object, undefined and null as argument.");

  // check array
  if (Array.isArray(x) || Array.isArray(y))
    throw new Error('Invalide parameter(s). Please provide string, number, boolen, object, undefined and null as argument.');

  return true;
}


const deepEqual = (a, b) => {
  if (checkAllowedParams(a, b)) {
    return true;
  }
  return false;
}

module.exports = deepEqual;