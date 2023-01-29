import { AppDataSource } from "../data-source";
import { Devs } from "../entities/Devs";

const devsRepository = AppDataSource.getRepository(Devs);

export { devsRepository };