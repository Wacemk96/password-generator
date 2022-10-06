import { getPassword } from '../getPassword';

describe('Test get password', () => {
  test('Should return correct number of password characters', () => {
    const hasLowercaseAlphabets = true;
    const hasUppercaseAlphabets = true;
    const hasNumbers = true;
    const hasSpecialCharacters = true;
    const passwordLength = 10;

    expect(
      getPassword({
        passwordLength,
        hasLowercaseAlphabets,
        hasUppercaseAlphabets,
        hasNumbers,
        hasSpecialCharacters,
      })
    ).toHaveLength(10);
  });

  test('Should return correct number of password characters', () => {
    const hasLowercaseAlphabets = true;
    const hasUppercaseAlphabets = true;
    const hasNumbers = true;
    const hasSpecialCharacters = true;
    const passwordLength = 0;

    expect(
      getPassword({
        passwordLength,
        hasLowercaseAlphabets,
        hasUppercaseAlphabets,
        hasNumbers,
        hasSpecialCharacters,
      })
    ).toHaveLength(4);
  });
});
