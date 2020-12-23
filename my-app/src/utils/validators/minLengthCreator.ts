import { FieldValidatorType } from "./required";

const minLengthCreator = (minLength: number): FieldValidatorType => (value) => {
  if (value && value.length < minLength) {
    return `watafak, max is ${minLength}`
  };

  return undefined;
}

export default minLengthCreator;