// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и
// возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
    // твой код
    let word = string.split(' ');

    let longesWord = '';
    for (let i = 0; i < word.length; i += 1) {
        if (word[i].length > longesWord.length) {
            longesWord = word[i];
        }
    }
    return longesWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
