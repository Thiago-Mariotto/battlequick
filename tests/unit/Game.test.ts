import { expect } from 'chai';
import Game from '../../src/domain/entity/Game';

describe('* Game entity test', function () {
  it('Should create a new Game', function () {
    const game = new Game('League Of Legends');
    game.addCategory(1, true);
    game.addCategory(2, false);

    expect(game).to.be.deep.equal({
      name: 'League Of Legends',
      categories: [{ id: 1, primary: true }, { id: 2, primary: false }]
    });
    expect(game.getCategories()).to.length(2);
  });

  it('Must not add two primary category a game', function () {
    const game = new Game('League Of Legends');
    game.addCategory(1, true);
    expect(() => game.addCategory(2, true)).to.throw('');
  });
});