import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('* Deve cadastrar um usuário', function () {
  const userInput = {
    fullname: 'Ada Lovelace',
    email: 'adalovelace@gmail.com',
    password: '123456',
    nickname: 'adaGamer'
  };

  const userOutput = {
    ...userInput,
    id: 1,
    role: 'member'
  };

  const host = 'http://localhost:3001';
  const endpoint = '/users';

  it('Deve ser possível cadastrar uma novo usuário', async function () {
    const register = await chai.request(host)
      .post(endpoint)
      .send(userInput);

    expect(register.status).to.be.equal(201);
    expect(register.body).to.be.equal('User Created');

    const getUsers = await chai.request(host)
      .get(endpoint);

    expect(getUsers.status).to.be.equal(200);
    console.log(getUsers.body, userOutput);
    expect(getUsers.body).to.include.deep.members([userOutput]);
  });
});