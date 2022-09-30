export const getSpecialCharacter = () => {
  const specialCharacters = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '=',
    '|',
    '/',
    '.',
    '>',
    '<',
    ',',
    ';',
    "'",
    '"',
    '[',
    ']',
    '{',
    '}',
  ];
  const randomIndex = Math.floor(Math.random() * specialCharacters.length);

  return specialCharacters[randomIndex];
};
