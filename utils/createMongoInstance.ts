import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();

export async function createMongoInstance() {
    return new MongoClient(
        `mongodb+srv://${process.env.database_mongodb_domain}`,
        { 
            auth: { 
                username: `${process.env.database_mongodb_username}`,
                password: `${process.env.database_mongodb_password}`,
            },
            tls: true,
            replicaSet: 'replicaset',
            authSource: 'admin'
        }
    );
}