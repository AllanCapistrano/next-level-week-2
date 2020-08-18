import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';


export default class LoginController {
  /*Realizar login. */
  async login(request: Request, response: Response) {
    const login = request.body;

    const passwordDb = await db('register')
      .select('password')
      .where({ email: login.email });

    /*Caso o e-mail não seja encontrado no banco de dados.*/
    if (passwordDb.length === 0) {
      return response.status(400).json({
        success: false,
        // message: "Error! email not found. Try register first"
        message: "Error, invalid email or password."
      });
    }

    try {
      const { password } = passwordDb[0]; /*Pegando somente o conteúdo da senha.*/

      bcrypt.compare(login.password, password, function (err: any, res: any) {
        if (err) {
          return response.status(404).json({
            success: false,
            message: "Unexpected error."
          })
        }
        if (res) {
          return response.status(200).json({
            success: true,
            message: 'Successfully login.'
          });
        } else {
          return response.status(400).json({
            success: false,
            message: 'Error, invalid email or password.'
          });
        }
      });
    } catch (err) {
      return response.status(400).json({
        success: false,
        message: "User authentication failed."
      })
    }
  }
}