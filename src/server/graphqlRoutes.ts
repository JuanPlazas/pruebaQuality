// Modules
import { Express } from 'express';
import expressGraphql from 'express-graphql';
import { graphqlUploadExpress } from 'graphql-upload';

// import config from '../../../config';
// import authentication from '../../server/entitlement';

// import api from '../graphql/schema';

export default (app: Express) => {

  app.use('/api',
    graphqlUploadExpress({ maxFileSize: Math.pow(10, 7), maxFiles: 10 }),
    // authentication,
    // expressGraphql((req: any) => ({
    //   graphiql: true,
    //   pretty: true,
    //   schema: api,
    //   rootValue: {
    //     decodedToken: req.body.decodedToken,
    //   },
    // }))
  );

};
