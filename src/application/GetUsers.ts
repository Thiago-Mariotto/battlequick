import UserRepository from '../domain/repository/UserRepository';

export default class GetUsers {
  constructor(readonly userRepository: UserRepository) { }

  async execute() {
    const users = await this.userRepository.getAll();
    return users;
  }
}