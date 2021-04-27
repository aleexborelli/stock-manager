import { Router } from 'express';
import userRoutes from './user';
import addressRoutes from './address';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => {
  response.json({ message: 'Hello Guys!' })
})

routes.use(`${prefixRoutes}/session`, sessionRoutes);
routes.use(`${prefixRoutes}/user`, userRoutes)
routes.use(`${prefixRoutes}/user-address`, addressRoutes)

export default routes;
