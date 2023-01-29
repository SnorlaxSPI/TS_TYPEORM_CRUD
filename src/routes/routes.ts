import Router from 'express';
import { DevsController } from '../controllers/DevsController';

const router = Router();

const devdController = new DevsController();

router.post('/devs', devdController.create);

//router.post('/devs', new DevsController().create);

export { router };