import CredentialDto from "../dto/credentialDto";
import ICredential from "../interfaces/ICredential";

let id: number = 1;
let credentials: ICredential[] = [];

export const createCredential = async (credentialData: CredentialDto): Promise<ICredential> => {
    const newCredential: ICredential = {
        id,
        username: credentialData.username,
        password: credentialData.password
    }

    id++
    credentials.push(newCredential);
    return newCredential
}

export const validateCredentialService = async (credentialData: CredentialDto): Promise<ICredential> =>{
    const credential = credentials.find((item:ICredential) => item.username === credentialData.username)

    if(!credential || credential.password !== credentialData.password) throw Error("wrong user or password")
        
    return credential
}

