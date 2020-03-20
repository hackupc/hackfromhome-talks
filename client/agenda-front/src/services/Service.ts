import IService from "./IService";
import { IContactModel } from "../models/IContactModel";

export default class Service implements IService {

    

    public getContacts(): Promise<Array<IContactModel>> {
        return new Promise<Array<IContactModel>>((resolve, reject)=>{

        });
    }

    public saveContacts(contact: IContactModel): Promise<string> {
        return new Promise<string>((resolve, reject)=>{

        });
    }

    public deleteContacts(contact_id: number): Promise<string> {
        return new Promise<string>((resolve, reject)=>{

        });
    }
}