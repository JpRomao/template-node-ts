import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server rodando na porta ${process.env.SERVER_PORT}!`)
);
