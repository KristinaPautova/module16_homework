import { getPercents } from "../index.js";

describe('test for getPercents function', () => {
    it('should return a percentage of the number, error > % end error < %',() => {
    expect(getPercents(50,100)).toBe(50);
    expect(getPercents(1001,100)).toBe('% не может быть больше 100');
    expect(getPercents(-2,100)).toBe('% не может быть меньше 0');
    })
})