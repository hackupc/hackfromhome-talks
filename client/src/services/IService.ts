import { IContactModel } from "../models/IContactModel";

export default interface IService {

    getContacts(): Promise<Array<IContactModel>>;
    saveContact(contact: IContactModel): Promise<string>;
    deleteContact(contact_id: number): Promise<string>;

}