import express from 'express';
import apiRoutes from './server/apiRoutes';
import config from './server/config';
import graphqlRoutes from './server/graphqlRoutes';
import security from './server/security';

const app = express();

// Express configuration
security(app);
config(app);

// Routes
graphqlRoutes(app);
apiRoutes(app);

export default app;
