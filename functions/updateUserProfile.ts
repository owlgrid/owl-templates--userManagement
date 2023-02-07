import axios from "axios";
import dotenv from 'dotenv';
import { User } from "../types/type";
import { createMongoInstance } from "../utils/createMongoInstance";

dotenv.config();

export default async function(user: User) {
    const client = await createMongoInstance();
    await client.connect();
    const db = client.db('owl-database');
    const userCollection = db.collection('user');
    console.log(await (await userCollection.find().toArray()).map(u => u._id.toString()))
    return await userCollection.updateOne(user, user);
}