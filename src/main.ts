import dotenv from 'dotenv';
import GetUsers from './application/GetUsers';
import RegisterUser from './application/RegisterUser';
import UserController from './infra/controller/UserController';
import ExpressAdapter from './infra/http/ExpressAdapter';
import UserRepositoryMemory from './infra/repository/memory/UserRepositoryMemory';

dotenv.config();

const PORT = process.env.PORT || 3001;

const userRepository = new UserRepositoryMemory();
const registerUser = new RegisterUser(userRepository);
const getUsers = new GetUsers(userRepository);

const httpServer = new ExpressAdapter();
new UserController(httpServer, registerUser, getUsers);

httpServer.listen(PORT as number);