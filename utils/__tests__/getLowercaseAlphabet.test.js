import { getLowercaseAlphabet } from '../getLowercaseAlphabet';

describe('Test get lowercase alphabets', () => {
  test('should return random lowercase alphabet', () => {
    expect(getLowercaseAlphabet()).toMatch(/[a-z]/);
  });

  test('should not random uppercase alphabet', () => {
    expect(getLowercaseAlphabet()).not.toMatch(/[A-Z]/);
  });

  test('Should only return single value', () => {
    expect(getLowercaseAlphabet()).toHaveLength(1);
  });
});
