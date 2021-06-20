const wrapObjectInArray = (arg) => {
  if (arg === undefined) return arg;

  if (Object.prototype.toString.call(arg) !== '[object Array]') return [arg];

  return arg;
};

// eslint-disable-next-line import/prefer-default-export
export { wrapObjectInArray };
