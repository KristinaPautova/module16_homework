export function repeatWord(word, count) {
    if(typeof word !== 'string'){
        return 'Данные некорректны'
      }
    let words = '';
  for (let i = 1; i <= count; ++i) {
  	words += word + i + ', ';
  }
  return words
}

repeatWord('собака', 5)