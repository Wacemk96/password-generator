import { getSpecialCharacter } from '../getSpecialCharacter';

describe('Test special characters', () => {
  test('Should return random number', () => {
    expect(getSpecialCharacter()).toMatch(
      /^[!@#$~%^&*()_+\-=\[\]\{\};':"\\|,.<>\/?]*$/
    );
  });

  test('Should not return random alphabet', () => {
    expect(getSpecialCharacter()).not.toMatch(/[a-z]/i);
  });

  test('Should not return random alphabet', () => {
    expect(getSpecialCharacter()).not.toMatch(/[0-9]/);
  });

  test('Should only return single value', () => {
    expect(getSpecialCharacter()).toHaveLength(1);
  });
});
