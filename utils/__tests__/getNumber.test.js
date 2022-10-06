import { getNumber } from '../getNumber';

describe('test get number', () => {
  test('Should return random number', () => {
    expect(getNumber()).toMatch(/[0-9]/);
  });

  test('Should only return single value', () => {
    expect(getNumber()).toHaveLength(1);
  });
});
