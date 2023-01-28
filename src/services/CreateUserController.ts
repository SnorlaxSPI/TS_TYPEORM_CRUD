import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController {
  async handle (request: Request, response:Response): Promise<void> {

    const { name, dev } = request.body;
    
    const createUser = new CreateUserUseCase();
    
    const user = await createUser.execute({
      name,
      dev,
    });

    response.json(user);
  }
}

export { CreateUserController };
