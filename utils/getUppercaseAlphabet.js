export const getUppercaseAlphabet = () => {
  const uppercaseAlphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const randomIndex = Math.floor(Math.random() * uppercaseAlphabets.length);

  return uppercaseAlphabets[randomIndex];
};
