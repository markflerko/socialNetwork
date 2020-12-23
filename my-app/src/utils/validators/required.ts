export type FieldValidatorType = (value: string) => string | undefined;

const required: FieldValidatorType = (value) => {
  if (value) return undefined;

  return "field is required";
};

export default required;
