import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const addressRoutes = Router()
const addressController = new AddressController();

addressRoutes.post('/', addressController.create);

export default addressRoutes;
