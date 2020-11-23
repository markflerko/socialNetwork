const maxLegnthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `watafak, max is ${maxLength}`
  };

  return undefined;
}

export default maxLegnthCreator;