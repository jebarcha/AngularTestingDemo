import { Player } from "./classes";

describe('test with classes', () => {
    const player = new Player();

    beforeEach( () => {
        player.hp = 100;    
    });

    it('should return 80 if damage is 20', () => {
        const result = player.getDamage(20);

        expect(result).toBe(80);

    });

    it('should return 50 if damage is 50', () => {
        const result = player.getDamage(50);

        expect(result).toBe(50);

    });

    it('should return 0 if damage greater than 100', () => {
        const result = player.getDamage(100);

        expect(result).toBe(0);

    });
});