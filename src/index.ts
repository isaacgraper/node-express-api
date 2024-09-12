import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from './config/config.js';

const app: Express = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send(`server running in ${config.nodeEnv}`);
});

app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`);
});