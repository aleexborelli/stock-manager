import User from '../models/User';
import CreateUserDTO from '../dtos/CreateUserDTO';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(createUserDTO: CreateUserDTO): Promise<User | undefined>;
}
