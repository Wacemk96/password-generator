import { getLowercaseAlphabet } from './getLowercaseAlphabet';
import { getNumber } from './getNumber';
import { getSpecialCharacter } from './getSpecialCharacter';
import { getUppercaseAlphabet } from './getUppercaseAlphabet';

export const getMustIncludeCharacters = ({
  hasLowercaseAlphabets,
  hasUppercaseAlphabets,
  hasNumbers,
  hasSpecialCharacters,
}) => {
  let initialPassword = '';

  if (hasLowercaseAlphabets === true) {
    initialPassword += getLowercaseAlphabet();
  }

  if (hasUppercaseAlphabets === true) {
    initialPassword += getUppercaseAlphabet();
  }

  if (hasNumbers === true) {
    initialPassword += getNumber();
  }
  if (hasSpecialCharacters === true) {
    initialPassword += getSpecialCharacter();
  }

  return initialPassword;
};
