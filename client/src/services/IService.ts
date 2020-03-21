import { IContactModel } from "../models/IContactModel";

export default interface IService {

    getContacts(): Promise<Array<IContactModel>>;
    createContact(contact: IContactModel): Promise<string>;
    updateContact(contact: IContactModel): Promise<string>;
    deleteContact(contact_id: number): Promise<string>;

}