const dotenv = require('dotenv')
dotenv.config('./.env')
const cors = require('cors')
const express = require('express')
const app = express();

const Connection = require('./database/db')
const Router = require('./routes/route')

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Router);

Connection();
// server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000');
})