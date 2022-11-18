 import express, { Router } from 'express'
 import cors from 'cors';
 import bodyParser from 'body-parser';

 import connection from './database/ds.js';
 import Routes from './routes/routes.js';


 const app = express()

 app.use(cors());


 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use('/', Routes);

 const PORT = 8000;

 connection();

 app.listen(PORT, () =>
     console.log(`sereve is running on port ${PORT}`));