import User from '../../../domain/entity/User';
import UserRepository from '../../../domain/repository/UserRepository';

export default class UserRepositoryMemory implements UserRepository {
  private users: any[];
  constructor() {
    this.users = [];
  }

  async create(user: User): Promise<void> {
    const id = this.users.length + 1;
    this.users.push({
      id,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      role: user.role,
    });
  }

  async getAll(): Promise<User[] | []> {
    return this.users;
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => email === user.email);
  }

  async getById(id: number): Promise<User | undefined> {
    return this.users.find((user) => id === user.id);
  }

  async update(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async remove(id: number): Promise<void> {
    this.users = this.users.filter((user) => user.id != id);
  }
}