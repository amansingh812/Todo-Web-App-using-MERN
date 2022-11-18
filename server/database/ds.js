import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.iruwkqn.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database is connected ');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database is not conneceted');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default connection;