import IAddressRepository from '../repositories/Address/IAddressRepository';
import AddressRepository from '../repositories/Address/AddressRepository';
import UserAddress from '../models/UserAddress';

interface Request {
  user_id: string;
  logradouro: string;
  numero: string;
  cidade: string;
  estado: string;
  cep: number;
}

class CreateUserAddressService {
  private addressRepository: IAddressRepository;

  constructor(addressRepository: AddressRepository) {
    this.addressRepository = addressRepository;
  }

  public async execute({
    user_id,
    logradouro,
    numero,
    cidade,
    estado,
    cep,
  }: Request): Promise<UserAddress | undefined> {
    const userAddress = await this.addressRepository.create({
      user_id,
      logradouro,
      numero,
      cidade,
      estado,
      cep,
    });

    return userAddress;
  }
}

export default CreateUserAddressService;
