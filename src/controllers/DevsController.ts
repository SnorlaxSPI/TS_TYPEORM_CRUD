import { Request, Response } from 'express';
import { devsRepository } from '../repositories/devsRepositories';

class DevsController {
  async create (request:Request, response:Response) {
    const { name, developer } = request.body;

    if (!name) {
      return response.status(400).json({ message: 'Required Name' });
    };

    try {
      const newDevs = devsRepository.create({ name, developer });
      await devsRepository.save(newDevs);
      return response.status(201).json(newDevs);
      
    } catch(error) {
      console.log(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

export { DevsController };