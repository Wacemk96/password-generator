export const getLowercaseAlphabet = () => {
  const lowercaseAlphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'w',
    'x',
    'y',
    'z',
  ];
  const randomIndex = Math.floor(Math.random() * lowercaseAlphabets.length);

  return lowercaseAlphabets[randomIndex];
};
