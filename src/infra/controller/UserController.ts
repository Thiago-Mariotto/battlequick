import GetUsers from '../../application/GetUsers';
import RegisterUser from '../../application/RegisterUser';
import HttpServer from '../http/HttpServer';

export default class UserController {
  constructor(
    readonly httpServer: HttpServer,
    readonly registerUser: RegisterUser,
    readonly getUsers: GetUsers
  ) {
    httpServer.on('post', '/users', async function (params: any, body: any) {
      await registerUser.execute(body);
      return { status: 201, response: 'User Created' };
    });

    httpServer.on('get', '/users', async function (params: any, body: any) {
      const users = await getUsers.execute();
      return { status: 200, response: users };
    });
  }
}