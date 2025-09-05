import CredentialDto from "../dto/credentialDto";
import ICredential from "../interfaces/ICredential";

let id: number = 1;
let credentials: ICredential[] = [];

export const createCredential = async (credentialData: CredentialDto): Promise<ICredential> => {
    
    const exists: boolean = credentials.some((item: ICredential) => item.username === credentialData.username)
    
    if(exists) {
        throw new Error("Username already exists")
    } 

    const newCredential: ICredential = {
        id,
        username: credentialData.username,
        password: credentialData.password
    }

    id++
    credentials.push(newCredential);
    return newCredential
}

export const checkCredential = async (credentialData: CredentialDto): Promise<number> =>{
    const credential = credentials.find((item:ICredential) => item.username === credentialData.username)

    if(credential && credential.password === credentialData.password) {
        return credential.id
    } else {
        throw new Error("wrong user or password")
    }
}

