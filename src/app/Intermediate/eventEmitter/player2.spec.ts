import { Player2 } from './player2';

describe('Player 2 Emit', () => {
    let player: Player2;

    beforeEach( () => player = new Player2() );

    it('should emit an event when receive a damage', () => {

        let newHp = 0;

        player.hpChange.subscribe( hp => {
            newHp = hp;
        });

        player.getDamage(1000);

        expect(newHp).toBe(0);
    });

    it('should emit an event when receive a damage and survive', () => {

        let newHp = 0;

        player.hpChange.subscribe( hp => newHp = hp );

        player.getDamage(50);

        expect(newHp).not.toBe(0);
        expect(newHp).toBe(50);
    });
});
