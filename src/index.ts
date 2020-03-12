import express from 'express';
import routes from './routes';

/* Config typeorm */
import "reflect-metadata";

const app = express();

app.use(routes);

app.listen(7000);