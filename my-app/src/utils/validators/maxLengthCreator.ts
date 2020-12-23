import { FieldValidatorType } from "./required";

const maxLegnthCreator = (maxLength: number): FieldValidatorType => (value) => {
  if (value && value.length > maxLength) {
    return `watafak, max is ${maxLength}`
  };

  return undefined;
}

export default maxLegnthCreator;