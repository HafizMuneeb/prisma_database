import cookieParser from 'cookie-parser';
import express from 'express';
import * as dotenv from 'dotenv';



dotenv.config();
const app = express();
//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//cookie middleware

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hi there')
})

const port  = 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})