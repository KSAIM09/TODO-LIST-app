const mongoose = require('mongoose');


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@todolist-shard-00-00.r5i3g.mongodb.net:27017,todolist-shard-00-01.r5i3g.mongodb.net:27017,todolist-shard-00-02.r5i3g.mongodb.net:27017/?ssl=true&replicaSet=atlas-4enqdj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=TodoList`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

module.exports = Connection;