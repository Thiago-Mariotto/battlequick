import { expect } from 'chai';
import Category from '../../src/domain/entity/Category';

describe('* Category entity test', function () {
  it('Should create a new Category', function () {
    const category = new Category('FPP');
    expect(category).to.be.deep.equal({ name: 'FPP' });
  });
});