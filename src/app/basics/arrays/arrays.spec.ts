import { getBeatles } from './arrays';
describe('test with arrays', () => {
    it('should return at least 3 beatles', () => {
        const result = getBeatles();

        expect(result.length).toBeGreaterThanOrEqual(3);
    });

    it('should exist Paul and Ringo', () => {
        const result = getBeatles();

        expect(result).toContain('Paul');
        expect(result).toContain('Ringo');
    });
});