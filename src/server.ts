import express, { Request, Response } from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import cors from 'cors'
const { v4: uuidv4 } = require('uuid');

import { v0Routes, v1Routes } from './routes';
// import { TourBooking } from './models/mongoose';


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'html');


//Routes
app.use('/api/v0', v0Routes);
app.use('/api/v1', v1Routes);



app.get('/', async (req: Request, res: Response) => {
  // return res.send('index.html')
  
 return res.render("index")
  return res.sendFile(path.join(__dirname, 'public/index.html'));
  // res.json({ id: uuidv4() })
  res.status(404).json({ "msg": "Resource not found" })

})
app.get('/page', async (req: Request, res: Response) => {
 
  return res.sendFile(path.join(__dirname, 'public/page.html'));
 

})



app.listen(port, async () => {
  // await mongoDB()
  console.log(`Server listening on port ${port}`);
});

