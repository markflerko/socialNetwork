const required = (value) => {
  if (value) return undefined;


  return 'field is required';
}

export default required;