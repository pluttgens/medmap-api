import http from 'http';
import config from 'config';
import AWS from 'aws-sdk';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { serverLogger } from './loggers';
import setupRoutes from './routes';

AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.Credentials(config.aws.accessKey, config.aws.secret)
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
setupRoutes(app);

const server = http.createServer(app);
server.on('listening', () => serverLogger.info(`Server listening on port ${config.port}`));

server.listen(config.port);
