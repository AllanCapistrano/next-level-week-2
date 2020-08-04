import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        /*Faz a contagem de registros e retorna dentro de um Array.*/
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0]; /*Como é apenas um registro, está na primeira posição.*/

        return response.json({ total });
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({user_id});

        return response.status(201).send();
    }
}