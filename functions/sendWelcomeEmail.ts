import { User } from "../types/type";
import { sendEmail } from "../utils/sendEmail";

export default async function(user: User): Promise<{}> {
    return await sendEmail({ Recipient: { Email: user.mail, Name: user.name }, Subject: "Welcome !", TextPart: `Welcome to Owlgrid ${user.name}` });
}