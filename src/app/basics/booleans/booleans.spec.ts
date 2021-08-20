import { isLogged } from './booleans';
describe('test with booleans', () => {
    it('should return true', () => {
        const result = isLogged();

        expect(result).toBeTrue();
    });
});