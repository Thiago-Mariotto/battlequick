import User from '../entity/User';

interface UserRepository {
  create(user: User): Promise<void>;
  getAll(): Promise<User[] | []>;
  getByEmail(email: string): Promise<User | undefined>;
  getById(id: number): Promise<User | undefined>;
  update(id: number): Promise<void>;
  remove(id: number): Promise<void>;
}

export default UserRepository;