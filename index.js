const enterText = document.querySelector('.enterBox');
const button = document.querySelector('.addBox');
const leftBox = document.querySelector('.russianWrapper');
const rightBox = document.querySelector('.translitWrapper');
const resetAll = document.querySelector('.reset');
const spiner = document.querySelector('#spin');

function translit(word) {
  let result = '';
  let dictionary = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'j',
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sh',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'ua',
    я: 'ya',
    ' ': ' ',
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'E',
    Ж: 'J',
    З: 'Z',
    И: 'I',
    Й: 'I',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'CH',
    Ш: 'SH',
    Щ: 'SH',
    Ъ: '',
    Ы: 'Y',
    Ь: '',
    Э: 'E',
    Ю: 'UA',
    Я: 'YA',
    '.': '.',
    ',': ',',
    ';': ';',
    ':': ':',
    '!': '!',
    '?': '?',
    '/': '/',
    '-': '-',
  };
  for (let i = 0; i < word.length; i++) {
    if (dictionary[word[i]] === undefined) {
      result += word[i];
    } else {
      result += dictionary[word[i]];
    }
  }
  return result;
}
button.addEventListener('click', (e) => {
  e.preventDefault();
  let { value } = enterText;
  if (!value) window.alert('Введите слово!');
  
  let textTransliter = translit(value);
  if (value) {
    spiner.className = 'lds-roller';
    setTimeout(() => {
      const span = document.createElement('span');
      span.innerText = value;
      let word = document.createElement('div');

      word.className = 'text';
      word.appendChild(span);
      leftBox.appendChild(word);

      const reSpan = document.createElement('span');
      reSpan.innerText = textTransliter;
      let translitWord = document.createElement('div');
      translitWord.className = 'text';
      translitWord.appendChild(reSpan);
      rightBox.appendChild(translitWord);
      spiner.className = '';
    }, 1000);
  }
});

resetAll.addEventListener('click', () => {
  while (leftBox.firstChild) {
    leftBox.removeChild(leftBox.firstChild);
    rightBox.removeChild(rightBox.firstChild);
  }
});
