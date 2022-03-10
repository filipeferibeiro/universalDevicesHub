import { Request, Response } from 'express';
import knex from '../database/connection';

class MessagesController {
    async index(request: Request, response: Response) {
        const messages = await knex('MESSAGES').select('*');

        return response.json(messages);
    }
}

export default MessagesController;