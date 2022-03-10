import { Request, Response } from 'express';
import knex from '../database/connection';

class TypesController {
    async index(request: Request, response: Response) {
        const types = await knex('TYPES').select('*');

        return response.json(types);
    }
}

export default TypesController;