import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv';
import KtuUser from './models/ktumodels.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    console.log(req);
    res.send("hello world");
});

app.post('/create', async(req, res) => {
    let {email,password} = req.body

    let data = await KtuUser.create({
        email,
        password

    })
    res.send(data);
});


connectdb();

app.listen(port, () => {
    console.log(`Server connected : http://localhost:${port}`);
});
