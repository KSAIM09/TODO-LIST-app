const dotenv = require('dotenv')
dotenv.config('./.env')
const cors = require('cors')
const express = require('express')
const app = express();

const Connection = require('./database/db')
const Router = require('./routes/route')

app.use(cors({
    origin: 'https://todo-list-app-beryl-rho.vercel.app', // Allow only your Vercel domain
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
    credentials: true // If you need to send cookies or authorization headers
}));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Router);

Connection();
// server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 3000');
})