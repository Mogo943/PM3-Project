import { credentialRepository } from "../repositories/indexRepository";
import CredentialDto from "../dto/credentialDto";
import { Credential } from "../entities/CredentialEntity";

export const createCredential = async (credentialData: CredentialDto): Promise<Credential> => {
    const foundCredential: Credential | null = await credentialRepository.findOneBy({ username: credentialData.username});
    if(foundCredential) throw Error ("Username already exists");

    const newCredential: Credential = credentialRepository.create(credentialData);

    await credentialRepository.save(newCredential);

    return newCredential;
}

export const validateCredentialService = async (credentialData: CredentialDto): Promise<number> =>{
    const foundCredential: Credential | null = await credentialRepository.findOneBy({ username: credentialData.username});
    
    if(!foundCredential) throw Error("wrong user or password")
        
    return foundCredential.id
}