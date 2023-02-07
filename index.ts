import createUser from "./functions/createUser"
import deleteUser from "./functions/deleteUser"
import getUserProfile from "./functions/getUserProfile";
import { sendEmail } from "./utils/sendEmail"

(async () => {
    // console.log(await createUser({name: "Arthur LEFEVRE", mail: "arthur@owlgrid.com", password: "test", creationDate: new Date(), profile: { phoneNumber: "0638693115" }}));
    // deleteUser('63e2898e1ec3e901eaef8bcc');
    console.log(await getUserProfile('63e28fd5e411a7edcef48348'));
})()