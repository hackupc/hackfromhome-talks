import { IContactModel } from "../../models/IContactModel";

export interface IAgendaItemProps {
    contact: IContactModel;
    editContact(contact?: IContactModel): void;
}