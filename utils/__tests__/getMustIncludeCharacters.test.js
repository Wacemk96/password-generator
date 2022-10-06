import { getMustIncludeCharacters } from '../getMustIncludeCharacters';

describe('Get must include characters', () => {
  describe('lowercase alphabets', () => {
    test('should have only lowercase alphabets', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = false;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/[a-z]/);
    });

    test('should have only have one lowercase alphabet', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = false;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(1);
    });
  });

  describe('uppercase alphabets', () => {
    test('should only have uppercase alphabets', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/[A-Z]/);
    });

    test('should have only have one uppercase alphabet', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(1);
    });
  });

  describe('numbers', () => {
    test('should have only numbers', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = false;
      const hasNumbers = true;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/[0-9]/);
    });

    test('should have only have one lowercase alphabet', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = false;
      const hasNumbers = true;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(1);
    });
  });

  describe('special characters', () => {
    test('should have only special characters', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = false;
      const hasNumbers = false;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/^[!@#$~%^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]$/);
    });

    test('should have only have one special character', () => {
      const hasLowercaseAlphabets = false;
      const hasUppercaseAlphabets = false;
      const hasNumbers = false;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(1);
    });
  });

  describe('lowercase alphabets and uppercase alphabets', () => {
    test('should have only special characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/^([a-z][A-Z]|[A-Z][a-z])$/);
    });

    test('should have only two characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(2);
    });
  });

  describe('lowercase alphabets and number', () => {
    test('should have only special characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = false;
      const hasNumbers = true;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/^([a-z][0-9]|[0-9][a-z])$/);
    });

    test('should have only two characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = false;
      const hasNumbers = true;
      const hasSpecialCharacters = false;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(2);
    });
  });

  describe('test lowercase, uppercase and special characters', () => {
    test('Should return lowercase, uppercase and number', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/^[a-z!@#$~%^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{3}$/i);
    });

    test('should have only three characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = false;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(3);
    });
  });

  describe('test lowercase, uppercase, numbers and special characters', () => {
    test('Should return lowercase, uppercase and number', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = true;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toMatch(/^[a-z0-9!@#$~%^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{4}$/i);
    });

    test('should have only three characters', () => {
      const hasLowercaseAlphabets = true;
      const hasUppercaseAlphabets = true;
      const hasNumbers = true;
      const hasSpecialCharacters = true;

      expect(
        getMustIncludeCharacters({
          hasLowercaseAlphabets,
          hasUppercaseAlphabets,
          hasNumbers,
          hasSpecialCharacters,
        })
      ).toHaveLength(4);
    });
  });
});
