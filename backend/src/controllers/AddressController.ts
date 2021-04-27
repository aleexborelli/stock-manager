import { Request, Response } from 'express';
import AddressRepository from '../repositories/Address/AddressRepository';
import CreateUserAddressService from '../services/CreateUserAddress';

class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      user_id, logradouro, numero, cidade, estado, cep,
    } = request.body;

    const addressRepository = new AddressRepository();
    const createUserAddress = new CreateUserAddressService(addressRepository);

    const userAddress = await createUserAddress.execute({
      user_id,
      logradouro,
      numero,
      cidade,
      estado,
      cep,
    });

    return response.json(userAddress);
  }
}

export default AddressController;
