import http from 'http';
import config from 'config';
import { awsConfig } from './helpers';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { accessLogger, serverLogger } from './loggers';
import setupRoutes from './routes';

awsConfig;
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: { write: message => accessLogger.info(message) } }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
setupRoutes(app);

const server = http.createServer(app);
server.on('listening', () => serverLogger.info(`Server listening on port ${config.port}`));

server.listen(config.port);
