import axios from "axios";
import dotenv from 'dotenv';
import { User } from "../types/type";

dotenv.config();

export default async function(user: User): Promise<{}> {
    const r = await axios.post(`${process.env.DATABASE_SERVICE_URL}/data/collections/user/documents/`, user);
    return {id: (r.data as {id: string}), ...user};
}