const generatePasswordStrengthName = (passwordStrength = 0) => {
  if (passwordStrength === 1 || passwordStrength === 0) {
    return 'too weak';
  } else if (passwordStrength === 2) {
    return 'weak';
  } else if (passwordStrength == 3) {
    return 'medium';
  } else if (passwordStrength == 4) {
    return 'strong';
  }
};

export default generatePasswordStrengthName;
