import { message } from "./string";

describe('test with strings', () => {
    it('should return a string', () => {
        const result = message('Jose');

        expect( typeof result).toBe('string');
    });

    it('should contain a name', () => {
        const name: string = 'Jose';
        const result = message(name);

        expect(result).toContain(name);
    });
});