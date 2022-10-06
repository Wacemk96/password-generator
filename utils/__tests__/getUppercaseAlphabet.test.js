import { getUppercaseAlphabet } from '../getUppercaseAlphabet';

describe('Test random uppercase alphabet', () => {
  test('Should return random uppercase alphabet', () => {
    expect(getUppercaseAlphabet()).toMatch(/[A-Z]/);
  });

  test('Should not return random lowercase alphabet', () => {
    expect(getUppercaseAlphabet()).not.toMatch(/[a-z]/);
  });

  test('Should only return single value', () => {
    expect(getUppercaseAlphabet()).toHaveLength(1);
  });
});
