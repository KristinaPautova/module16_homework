import { repeatWord } from "../../unit/repeatWord.js";

describe('test for repeatWord function', () => {
    it('should return a repeat word, error',() => {
    expect(repeatWord('ночь', 2)).toBe('ночь1, ночь2, ');
    expect(repeatWord(6, 2)).toBe('Данные некорректны');
    })
})