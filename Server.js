import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv';
import ktuRoute from './routes/ktuRoutes.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


// middlewares (to parse json and urlencoded data)
app.use(express.json());   
app.use(express.urlencoded({extended : true}));



// routing server -> ktuRoutes -> ktuControls 
app.use('/api/ktu',ktuRoute)


// database connection
connectdb();



// server listening
app.listen(port, () => {
    console.log(`Server connected : http://localhost:${port}`);
});
