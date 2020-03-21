import { IContactModel } from "../../models/IContactModel";

export interface IAgendaContactFileProps {
    contact?: IContactModel;
    panelOpen: boolean;
    closePanel(): void;
    saveContact(contact?: IContactModel): void;
}