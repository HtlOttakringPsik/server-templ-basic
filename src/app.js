import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from "morgan";

import testRoute from './api/routes/test.js';

const dirname = path.resolve();

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(dirname, '/public')));
app.use(express.json());

app.use('/test', testRoute);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
