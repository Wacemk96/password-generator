import { getLowercaseAlphabet } from './getLowercaseAlphabet';
import { getMustIncludeCharacters } from './getMustIncludeCharacters';
import { getNumber } from './getNumber';
import { getSpecialCharacter } from './getSpecialCharacter';
import { getUppercaseAlphabet } from './getUppercaseAlphabet';

export const getPassword = ({
  passwordLength,
  hasLowercaseAlphabets,
  hasNumbers,
  hasSpecialCharacters,
  hasUppercaseAlphabets,
}) => {
  let password = '';
  let i = 0;
  let mustIncludeFeaturesAmount = 0;

  if (
    !hasLowercaseAlphabets &&
    !hasUppercaseAlphabets &&
    !hasNumbers &&
    !hasSpecialCharacters
  ) {
    return 'P4$5W0rD!';
  }

  if (hasLowercaseAlphabets) {
    mustIncludeFeaturesAmount += 1;
  }

  if (hasUppercaseAlphabets) {
    mustIncludeFeaturesAmount += 1;
  }

  if (hasNumbers) {
    mustIncludeFeaturesAmount += 1;
  }

  if (hasSpecialCharacters) {
    mustIncludeFeaturesAmount += 1;
  }

  while (i < passwordLength - mustIncludeFeaturesAmount) {
    const randomNumber = Math.floor(Math.random() * 4);

    if (randomNumber === 0) {
      if (hasLowercaseAlphabets === true) {
        password += getLowercaseAlphabet();
        i++;
      }
    } else if (randomNumber === 1) {
      if (hasNumbers === true) {
        password += getNumber();
        i++;
      }
    } else if (randomNumber === 2) {
      if (hasUppercaseAlphabets === true) {
        password += getUppercaseAlphabet();
        i++;
      }
    } else if (randomNumber === 3) {
      if (hasSpecialCharacters === true) {
        password += getSpecialCharacter();
        i++;
      }
    }
  }

  const randomNumber2 = Math.floor(Math.random() * 2);

  switch (randomNumber2) {
    case 0:
      password =
        password +
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasNumbers,
          hasUppercaseAlphabets,
          hasSpecialCharacters,
        });
      break;

    case 1:
      password =
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasNumbers,
          hasUppercaseAlphabets,
          hasSpecialCharacters,
        }) + password;
      break;
  }

  return password;
};
