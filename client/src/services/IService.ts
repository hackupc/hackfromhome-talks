import { IContactModel } from "../models/IContactModel";

export default interface IService {

    getContacts(): Promise<Array<IContactModel>>;
    saveContacts(contact: IContactModel): Promise<string>;
    deleteContacts(contact_id: number): Promise<string>;

}