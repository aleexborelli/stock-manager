import { Repository, getRepository } from 'typeorm';
import CreateUserAddressDTO from '../../dtos/CreateUserAddressDTO';
import UserAddress from '../../models/UserAddress';
import IAddressRepository from './IAddressRepository';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<UserAddress>;

  constructor() {
    this.ormRepository = getRepository(UserAddress);
  }

  public async findByUserId(
    user_id: string,
  ): Promise<UserAddress[] | undefined> {
    const userAddress = await this.ormRepository.find({
      where: { user_id },
    });

    return userAddress;
  }

  public async create({
    user_id,
    logradouro,
    numero,
    cidade,
    estado,
    cep,
  }: CreateUserAddressDTO): Promise<UserAddress | undefined> {
    const userAddress = this.ormRepository.create({
      user_id,
      logradouro,
      numero,
      cidade,
      estado,
      cep,
    });

    await this.ormRepository.save(userAddress)

    return userAddress;
  }
}

export default AddressRepository;
