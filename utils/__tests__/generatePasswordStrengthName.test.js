import { screen, render } from '@testing-library/react';
import generatePasswordStrengthName from '../generatePasswordStrengthName';

describe('Generate password strength name', () => {
  test('password strength is not given', () => {
    expect(generatePasswordStrengthName()).toMatch(/too weak/i);
  });

  test('password strength is 1', () => {
    expect(generatePasswordStrengthName(1)).toMatch(/too weak/i);
  });

  test('password strength is 2', () => {
    expect(generatePasswordStrengthName(2)).toMatch(/weak/i);
  });

  test('password strength is 3', () => {
    expect(generatePasswordStrengthName(3)).toMatch(/medium/i);
  });

  test('password strength is 4', () => {
    expect(generatePasswordStrengthName(4)).toMatch(/strong/i);
  });
});
