import Router from 'express';
import { DevsController } from '../controllers/DevsController';

const router = Router();

router.post('/devs', new DevsController().create);

export { router };