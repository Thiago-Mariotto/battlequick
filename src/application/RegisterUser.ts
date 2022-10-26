import User from '../domain/entity/User';
import UserRepository from '../domain/repository/UserRepository';

export default class RegisterUser {
  constructor(readonly userRepository: UserRepository) { }

  async execute(input: User) {
    const { fullname, email, password, nickname } = input;
    const user = new User(fullname, email, password, nickname);
    await this.userRepository.create(user);
  }
}