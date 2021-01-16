/* istanbul ignore file */
import fs from 'fs';
import http from 'http';
import https from 'https';
import app from './app';
import config from './config';

let server;
server = http.createServer(app);

server.listen(app.get('port'), async () => {
  console.log(`App is running at http://localhost:${app.get('port')}`);
});

export default server;
