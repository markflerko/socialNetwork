const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) {
    return `watafak, max is ${minLength}`
  };

  return undefined;
}

export default minLengthCreator;