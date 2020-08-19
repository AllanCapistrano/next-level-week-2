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

      /*Verifica se a senha passada no login está correta. */
      bcrypt.compare(login.password, password, function (err: any, res: any) {
        if (err) { /*Caso ocorra algum erro durante a comparação.*/
          return response.status(404).json({
            success: false,
            message: "Unexpected error."
          })
        }
        if (res) { /*Caso esteja tudo ok.*/
          return response.status(200).json({
            success: true,
            message: 'Successfully login.'
          });
        } else {/*Caso a senha esteja incorreta.*/
          return response.status(400).json({
            success: false,
            message: 'Error, invalid email or password.'
          });
        }
      });
    } catch (err) { /*Caso ocorra algum erro durante a autenticação..*/
      return response.status(400).json({
        success: false,
        message: "User authentication failed."
      })
    }
  }
}