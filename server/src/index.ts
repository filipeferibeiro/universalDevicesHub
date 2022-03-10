import express from 'express';
import cors from 'cors';

import connection from './database/connection';
import routes from './routes';

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});