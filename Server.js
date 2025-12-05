import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log(req);
    res.send("hello world");
});


connectdb();

app.listen(port, () => {
    console.log(`Server connected : http://localhost:${port}`);
});
