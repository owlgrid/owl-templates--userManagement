import dotenv from 'dotenv';
import { createMongoInstance } from "../utils/createMongoInstance";
import { ObjectId } from 'mongodb';

dotenv.config();

export default async function(id: string) {
    const client = await createMongoInstance();
    await client.connect();
    const db = client.db('owl-database');
    const userCollection = db.collection('user');
    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount == 1;
}