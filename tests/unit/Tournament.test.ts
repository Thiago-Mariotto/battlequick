import { expect } from 'chai';
import Tournament from '../../src/domain/entity/Tournament';

describe('* Tournament entity test', function () {
  const oneYearLater = new Date().getFullYear() + 1;
  it('Should create a new Tournament', function () {
    const tournament = new Tournament(
      'Torneio das estrelas',
      'Descrição do torneio ....',
      1,
      10,
      new Date(`${oneYearLater}-01-01T06:00:00`),
      1
    );
    expect(tournament).to.be.deep.equal(tournament);
  });

  it('Must not create a tournament with past Date', function () {
    const oneYearAgo = new Date().getFullYear() - 1;
    expect(() => new Tournament(
      'Torneio das estrelas',
      'Descrição do torneio ...',
      1,
      10,
      new Date(`${oneYearAgo}-01-01T08:00:00`),
      1
    )).to.throw('Tournament date is invalid');
  });

  it('', function () {
    const oneYearLater = new Date().getFullYear() + 1;
    expect(() => new Tournament(
      'Torneio das estrelas',
      'Descrição',
      1,
      10,
      new Date(`${oneYearLater}-01-01T08:00:00`),
      1
    )).to.throw('Description must be at least 20 characters long');
  });
});