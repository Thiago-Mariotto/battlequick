import { expect } from 'chai';
import User from '../../src/domain/entity/User';

describe('* User entity test', function () {
  it('Should create a new user', function () {
    const outputUser = {
      fullname: 'thiago',
      email: 'thiago@email.com',
      password: '123456',
      nickname: 'mariotto21'
    };

    const user = new User('thiago', 'thiago@email.com', '123456', 'mariotto21');
    expect(user).to.be.deep.equal(outputUser);
  });

  it('Must not create a user with invalid email', function () {
    expect(() =>
      new User('thiago', 'eu.com', '123456', 'mariotto21'))
      .to.throw('Invalid Email');
  });
});