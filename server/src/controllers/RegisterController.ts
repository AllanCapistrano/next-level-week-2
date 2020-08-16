import { Request, Response } from 'express';

import db from '../database/connection';

/*interface Register {
  name: string;
  lastName: string;
  email: string;
  password: string;
}*/

export default class RegisterController {
  /*async index(request: Request, response: Response){
    const registers = await db('register').select('register.*');

    return response.json(registers);
  }*/

  async create(request: Request, response: Response) {
    const {
      name,
      lastName,
      email,
      password
    } = request.body;

    const trx = await db.transaction();

    try {
      await trx('register').insert({
        name,
        lastName,
        email,
        password
      });

      await trx.commit();

      return response.status(201).send();
    }catch(err){
      console.log(err);

      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new register'
      });
    }
  }
}