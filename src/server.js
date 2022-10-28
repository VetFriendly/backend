import express from 'express';
import cors from 'cors'

import routerVeterinaryUser from './routers/veterinary.userRouters.js';

const server = express();
server.use(cors())
server.use( express.json() )

// Routers
server.use('/api/veterinaryuser', routerVeterinaryUser);

export {server};