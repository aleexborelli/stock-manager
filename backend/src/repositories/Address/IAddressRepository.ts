import UserAddress from '../../models/UserAddress';
import CreateUserAddressDTO from '../../dtos/CreateUserAddressDTO';

export default interface IAddressRepository {
  findByUserId(user_id: string): Promise<UserAddress[] | undefined>;
  create(createUserAddressDTO: CreateUserAddressDTO): Promise<UserAddress | undefined>;
}
