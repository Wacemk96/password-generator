import { screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../index';
import { renderWithProviders } from '../test-utils/renderWithProviders';

beforeEach(cleanup);

describe('Test Home component', () => {
  describe('Test Password length', () => {
    test('range slider should not be greater than 50', () => {
      renderWithProviders(<Home />);
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: 100 } });

      const passwordLengthElement = screen.getByTestId('password-length');
      expect(passwordLengthElement).toHaveTextContent('50');
    });

    test('range slider should change password length', () => {
      renderWithProviders(<Home />);
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: 20 } });

      const passwordLengthElement = screen.getByTestId('password-length');
      expect(passwordLengthElement).toHaveTextContent('20');
    });
  });

  describe('Test password features and password strength', () => {
    test('Should show too weak strength when only one feature is selected and background should be red', () => {
      renderWithProviders(<Home />);
      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      fireEvent.click(hasLowercaseAlphabetsCheckbox);

      const passwordStrengthElement = screen.getByTestId('password-strength');
      const strengthBar1 = screen.getByTestId('strength-bar-1');

      expect(passwordStrengthElement).toHaveTextContent(/too weak/i);
      expect(strengthBar1).toHaveClass('bg-red-500');
    });

    test('Should show weak strength when two features are selected and background should be yellow', () => {
      renderWithProviders(<Home />);
      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      fireEvent.click(hasLowercaseAlphabetsCheckbox);

      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );
      fireEvent.click(hasUppercaseAlphabetsCheckbox);

      const passwordStrengthElement = screen.getByTestId('password-strength');
      const strengthBar1 = screen.getByTestId('strength-bar-1');
      const strengthBar2 = screen.getByTestId('strength-bar-2');

      expect(passwordStrengthElement).toHaveTextContent(/weak/i);
      expect(strengthBar1).toHaveClass('bg-yellow');
      expect(strengthBar2).toHaveClass('bg-yellow');
    });

    test('Should show medium strength when three features are selected and background should be yellow', () => {
      renderWithProviders(<Home />);
      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      fireEvent.click(hasLowercaseAlphabetsCheckbox);

      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );
      fireEvent.click(hasUppercaseAlphabetsCheckbox);

      const hasNumbers = screen.getByText(/include numbers/i);
      fireEvent.click(hasNumbers);

      const passwordStrengthElement = screen.getByTestId('password-strength');
      const strengthBar1 = screen.getByTestId('strength-bar-1');
      const strengthBar2 = screen.getByTestId('strength-bar-2');
      const strengthBar3 = screen.getByTestId('strength-bar-3');

      expect(passwordStrengthElement).toHaveTextContent(/medium/i);
      expect(strengthBar1).toHaveClass('bg-yellow');
      expect(strengthBar2).toHaveClass('bg-yellow');
      expect(strengthBar3).toHaveClass('bg-yellow');
    });

    test('Should show strong strength when all four features are selected and background should be limeGreen', () => {
      renderWithProviders(<Home />);
      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      fireEvent.click(hasLowercaseAlphabetsCheckbox);

      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );
      fireEvent.click(hasUppercaseAlphabetsCheckbox);

      const hasNumbers = screen.getByText(/include numbers/i);
      fireEvent.click(hasNumbers);

      const hasSpecialCharactersCheckbox = screen.getByText(/Include Symbols/i);
      fireEvent.click(hasSpecialCharactersCheckbox);

      const passwordStrengthElement = screen.getByTestId('password-strength');
      const strengthBar1 = screen.getByTestId('strength-bar-1');
      const strengthBar2 = screen.getByTestId('strength-bar-2');
      const strengthBar3 = screen.getByTestId('strength-bar-3');
      const strengthBar4 = screen.getByTestId('strength-bar-4');

      expect(passwordStrengthElement).toHaveTextContent(/strong/i);
      expect(strengthBar1).toHaveClass('bg-limeGreen');
      expect(strengthBar2).toHaveClass('bg-limeGreen');
      expect(strengthBar3).toHaveClass('bg-limeGreen');
      expect(strengthBar4).toHaveClass('bg-limeGreen');
    });
  });

  describe('Test password display', () => {
    test('Should display default value when none of the features are selected', () => {
      renderWithProviders(<Home />);

      const generateButton = screen.getByRole('button');
      fireEvent.click(generateButton);

      const passwordElement = screen.getByTestId('password-display');

      expect(passwordElement).toHaveTextContent(/^P4\$5W0rD!$/i);
      expect(passwordElement.textContent).toHaveLength(9);
    });

    test('Should display all characters and have correct number of characters', () => {
      renderWithProviders(<Home />);

      const PASSWORD_LENGTH = 10;
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: PASSWORD_LENGTH } });

      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      const hasSpecialCharactersCheckbox = screen.getByText(/Include Symbols/i);
      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );
      const hasNumbers = screen.getByText(/include numbers/i);

      fireEvent.click(hasLowercaseAlphabetsCheckbox);
      fireEvent.click(hasUppercaseAlphabetsCheckbox);
      fireEvent.click(hasNumbers);
      fireEvent.click(hasSpecialCharactersCheckbox);

      const generateButton = screen.getByRole('button');
      fireEvent.click(generateButton);

      const passwordElement = screen.getByTestId('password-display');

      expect(passwordElement).toHaveTextContent(
        /^[a-zA-Z0-9!@#$~%^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{10}$/
      );
      expect(passwordElement.textContent).toHaveLength(10);
    });

    test('Should display lowercase, uppercase and special characters and have correct number of characters', () => {
      renderWithProviders(<Home />);

      const PASSWORD_LENGTH = 20;
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: PASSWORD_LENGTH } });

      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      const hasSpecialCharactersCheckbox = screen.getByText(/Include Symbols/i);
      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );

      fireEvent.click(hasLowercaseAlphabetsCheckbox);
      fireEvent.click(hasUppercaseAlphabetsCheckbox);
      fireEvent.click(hasSpecialCharactersCheckbox);

      const generateButton = screen.getByRole('button');
      fireEvent.click(generateButton);

      const passwordElement = screen.getByTestId('password-display');

      expect(passwordElement).toHaveTextContent(
        /^[a-zA-Z!@#$~%^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{20}$/
      );
      expect(passwordElement.textContent).toHaveLength(PASSWORD_LENGTH);
    });

    test('Should display lowercase and uppercase characters and have correct number of characters', () => {
      renderWithProviders(<Home />);

      const PASSWORD_LENGTH = 50;
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: PASSWORD_LENGTH } });

      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );
      const hasUppercaseAlphabetsCheckbox = screen.getByText(
        /include uppercase letters/i
      );

      fireEvent.click(hasLowercaseAlphabetsCheckbox);
      fireEvent.click(hasUppercaseAlphabetsCheckbox);

      const generateButton = screen.getByRole('button');
      fireEvent.click(generateButton);

      const passwordElement = screen.getByTestId('password-display');

      expect(passwordElement).toHaveTextContent(/^[a-z]{50}$/i);
      expect(passwordElement.textContent).toHaveLength(PASSWORD_LENGTH);
    });

    test('Should display lowercase characters and have correct number of characters', () => {
      renderWithProviders(<Home />);

      const PASSWORD_LENGTH = 5;
      const inputElement = screen.getByTestId('range-slider');
      fireEvent.change(inputElement, { target: { value: PASSWORD_LENGTH } });

      const hasLowercaseAlphabetsCheckbox = screen.getByText(
        /include lowercase letters/i
      );

      fireEvent.click(hasLowercaseAlphabetsCheckbox);

      const generateButton = screen.getByRole('button');
      fireEvent.click(generateButton);

      const passwordElement = screen.getByTestId('password-display');

      expect(passwordElement).toHaveTextContent(/^[a-z]{5}$/i);
      expect(passwordElement.textContent).toHaveLength(PASSWORD_LENGTH);
    });
  });
});
