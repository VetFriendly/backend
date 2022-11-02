import express from 'express';
import cors from 'cors'

import routerVeterinaryUser from './routers/veterinary.userRouters.js';
import logInUsers from './routers/logIn.usersRouter.js'

const server = express();
server.use(cors())
server.use( express.json() )

// Routers
server.use('/api/veterinaryuser', routerVeterinaryUser);
server.use('/api/login', logInUsers);

export {server};