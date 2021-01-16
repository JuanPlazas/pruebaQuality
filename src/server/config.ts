import * as bodyParser from 'body-parser';
import compression from 'compression';
import { Express } from 'express';
import model from '../models'
import config from '../config';

export default async (app: Express) => {
  app.set('port', config.PORT);
  app.use(compression());
  app.use(bodyParser.json({
    limit: '10mb',
  }));
  app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100,
  }));

  model.sequelize.sync();
};
