import { createSlice } from '@reduxjs/toolkit';
import { getPassword } from './utils/getPassword';

const initialState = {
  password: 'P4$5W0rD!',
  passwordLength: 10,
  passwordStrength: 0,
  hasLowercaseAlphabets: false,
  hasUppercaseAlphabets: false,
  hasNumbers: false,
  hasSpecialCharacters: false,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    toggleHasLowercaseAlphabets: (state) => {
      if (state.hasLowercaseAlphabets) {
        state.passwordStrength -= 1;
      } else {
        state.passwordStrength += 1;
      }

      state.hasLowercaseAlphabets = !state.hasLowercaseAlphabets;
    },

    toggleHasUppercaseAlphabets: (state) => {
      if (state.hasUppercaseAlphabets) {
        state.passwordStrength -= 1;
      } else {
        state.passwordStrength += 1;
      }

      state.hasUppercaseAlphabets = !state.hasUppercaseAlphabets;
    },

    toggleHasNumbers: (state) => {
      if (state.hasNumbers) {
        state.passwordStrength -= 1;
      } else {
        state.passwordStrength += 1;
      }

      state.hasNumbers = !state.hasNumbers;
    },

    toggleHasSpecialCharacters: (state) => {
      if (state.hasSpecialCharacters) {
        state.passwordStrength -= 1;
      } else {
        state.passwordStrength += 1;
      }

      state.hasSpecialCharacters = !state.hasSpecialCharacters;
    },

    changePasswordLength: (state, action) => {
      state.passwordLength = action.payload;
    },

    generatePassword: (state) => {
      const {
        hasLowercaseAlphabets,
        hasUppercaseAlphabets,
        hasNumbers,
        hasSpecialCharacters,
        passwordLength,
      } = state;

      state.password = getPassword({
        passwordLength,
        hasLowercaseAlphabets,
        hasUppercaseAlphabets,
        hasNumbers,
        hasSpecialCharacters,
      });
    },
  },
});

export default passwordSlice.reducer;

export const {
  toggleHasLowercaseAlphabets,
  toggleHasUppercaseAlphabets,
  toggleHasNumbers,
  toggleHasSpecialCharacters,
  changePasswordLength,
  generatePassword,
} = passwordSlice.actions;
