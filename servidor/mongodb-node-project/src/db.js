const { MongoClient } = require('mongodb');

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string

let dbClient;

const connectDB = async () => {
    if (!dbClient) {
        dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await dbClient.connect();
    }
    return dbClient.db('your_database_name'); // Replace with your database name
};

module.exports = connectDB;