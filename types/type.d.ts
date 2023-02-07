export interface User {
    _id?: ObjectId,
    name: string,
    password: string,
    mail: string,
    creationDate?: Date,
    profile?: Profile,
}

export interface Profile {
    phoneNumber: string,
}