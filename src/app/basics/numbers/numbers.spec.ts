import { increment } from './numbers';
describe('test of numbers', () => {
    it('should return a number', () => {
        const result = increment(100);
        
        expect(typeof result).toBe('number');
    });

    it('should return 100 if number is greater than 100', () => {
        const result = increment(101);

        expect(result).toBe(100);
    });

    it('should increment by 1 when number is less than 100', () => {
        const num: number = 1;
        const result = increment(num);
        const expected = num + 1;

        expect(result).toBe(expected);
    });
});