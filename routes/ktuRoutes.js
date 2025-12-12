import express from 'express';
import { createKtuData, getKtuData } from '../controllers/ktuControls.js';

const ktuRoute = express.Router();


// data fetching route
ktuRoute.get('/',getKtuData)

// data creating route
ktuRoute.post('/create',createKtuData)



export default ktuRoute;    