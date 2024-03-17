import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'


//CREATE APP AND UPDATE SOME SETTINGS
const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)
//DATABASE CONNECTION
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT, '192.168.1.2'||'localhost', ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error) =>console.log(error.message))



